package org.stackraiders.jpa.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.stackraiders.jpa.entity.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
}