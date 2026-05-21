package org.stackraiders.jpa.controller;

import org.stackraiders.jpa.entity.Incidencia;
import org.stackraiders.jpa.repository.IncidenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/incidencias")
@CrossOrigin(origins = "*")
public class IncidenciaController {

    @Autowired
    private IncidenciaRepository incidenciaRepository;

    // GET: Devuelve todas las incidencias para la tabla de Angular
    @GetMapping
    public List<Incidencia> getAllIncidencias() {
        return incidenciaRepository.findAll();
    }

    // POST: Recibe el formulario de Angular y guarda una nueva incidencia
    @PostMapping
    public Incidencia createIncidencia(@RequestBody Incidencia incidencia) {
        return incidenciaRepository.save(incidencia);
    }
}
