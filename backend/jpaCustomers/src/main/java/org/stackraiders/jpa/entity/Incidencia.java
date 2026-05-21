package org.stackraiders.jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "incidencias")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Incidencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descripcion;
    private String fechaReporte;
    private String prioridad; // BAJA, MEDIA, ALTA, CRITICA
    private String estado; // ABIERTA, EN_PROCESO, RESUELTA
    private String comentariosTecnico;

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @JsonIgnoreProperties("incidencias")
    private Empleado empleado;

    @ManyToOne
    @JoinColumn(name = "equipo_id")
    @JsonIgnoreProperties("empleado")
    private Equipo equipo;
}