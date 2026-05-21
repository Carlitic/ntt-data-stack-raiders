package org.stackraiders.jpa.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "equipos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Equipo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String modelo;
    private String tipo; // PORTATIL, SOBREMESA, SERVIDOR, PERIFERICO
    private String fechaAdquisicion;
    private String estado; // OPERATIVO, REPARACION, BAJA

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonIgnoreProperties("incidencias")
    private Empleado empleado;
}