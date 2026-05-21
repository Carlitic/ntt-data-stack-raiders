package org.stackraiders.jpa;

import org.stackraiders.jpa.entity.Empleado;
import org.stackraiders.jpa.entity.Equipo;
import org.stackraiders.jpa.entity.Incidencia;
import org.stackraiders.jpa.repository.EmpleadoRepository;
import org.stackraiders.jpa.repository.EquipoRepository;
import org.stackraiders.jpa.repository.IncidenciaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.ArrayList;

@SpringBootApplication
public class JpaApplication {

	public static void main(String[] PREFIX) {
		SpringApplication.run(JpaApplication.class, PREFIX);
	}

	@Bean
	CommandLineRunner initDatabase(EmpleadoRepository empRepo, EquipoRepository eqRepo, IncidenciaRepository incRepo) {
		return args -> {
			// Validamos si ya existen datos para no duplicar en cada reinicio en caliente
			if (empRepo.count() == 0) {

				// 1. Creamos Empleados corporativos
				Empleado emp1 = new Empleado(null, "Carlos", "Garcia", "carlos@stackraiders.com", "Sistemas", new ArrayList<>());
				Empleado emp2 = new Empleado(null, "Jorge", "Lopez", "jorge@stackraiders.com", "Desarrollo", new ArrayList<>());
				emp1 = empRepo.save(emp1);
				emp2 = empRepo.save(emp2);

				// 2. Creamos Equipos asignados a esos empleados
				Equipo eq1 = new Equipo(null, "MacBook Pro M3", "PORTATIL", "2024-01-15", "OPERATIVO", emp1);
				Equipo eq2 = new Equipo(null, "Dell OptiPlex", "SOBREMESA", "2023-05-20", "OPERATIVO", emp2);
				eqRepo.save(eq1);
				eqRepo.save(eq2);

				// 3. Creamos Incidencias iniciales asociadas
				incRepo.save(new Incidencia(null, "La pantalla parpadea al conectar el monitor externo", "2026-05-21", "MEDIA", "ABIERTA", "", emp1, eq1));
				incRepo.save(new Incidencia(null, "Error de falta de RAM al compilar contenedores Docker", "2026-05-20", "ALTA", "EN_PROCESO", "Revisando asignacion de modulos", emp2, eq2));

				System.out.println("--> ¡Base de datos H2 inicializada con incidencias del examen!");
			}
		};
	}
}
