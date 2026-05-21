import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incidencia } from './incidencia.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private http = inject(HttpClient);
  incidencias: Incidencia[] = [];

  // Objeto de estadísticas para que el HTML no falle
  stats = {
    abierta: 0,
    enProceso: 0,
    resuelta: 0
  };

  ngOnInit(): void {
    this.cargarIncidencias();
  }

  cargarIncidencias(): void {
    this.http.get<Incidencia[]>('http://localhost:8080/api/incidencias')
      .subscribe({
        next: (data) => {
          this.incidencias = data;
          this.calcularEstadisticas();
        },
        error: (err) => console.error('Error al cargar incidencias', err)
      });
  }

  calcularEstadisticas(): void {
    this.stats.abierta = this.incidencias.filter(i => i.estado === 'ABIERTA').length;
    this.stats.enProceso = this.incidencias.filter(i => i.estado === 'EN_PROCESO').length;
    this.stats.resuelta = this.incidencias.filter(i => i.estado === 'RESUELTA').length;
  }

  // Método que pide el HTML para dar estilo según la prioridad
  getPriorityClass(prioridad: string): string {
    switch (prioridad) {
      case 'CRITICA': return 'priority-critica';
      case 'ALTA': return 'priority-alta';
      case 'MEDIA': return 'priority-media';
      default: return 'priority-baja';
    }
  }
}
