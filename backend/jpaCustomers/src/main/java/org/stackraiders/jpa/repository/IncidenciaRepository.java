package org.stackraiders.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.stackraiders.jpa.entity.Incidencia;

public interface IncidenciaRepository extends JpaRepository<Incidencia, Long> {
}