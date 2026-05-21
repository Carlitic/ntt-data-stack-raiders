import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Incidencia } from './incidencia.model';

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

  // Objeto stats que requiere vuestro archivo dashboard.component.html
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
        error: (err) => console.error('Error al conectar con la API:', err)
      });
  }

  calcularEstadisticas(): void {
    this.stats.abierta = this.incidencias.filter(i => i.estado === 'ABIERTA').length;
    this.stats.enProceso = this.incidencias.filter(i => i.estado === 'EN_PROCESO').length;
    this.stats.resuelta = this.incidencias.filter(i => i.estado === 'RESUELTA').length;
  }

  // Método que pide vuestro HTML para pintar las insignias de colores
  getPriorityClass(prioridad: string): string {
    switch (prioridad?.toUpperCase()) {
      case 'CRITICA': return 'priority-critica';
      case 'ALTA': return 'priority-alta';
      case 'MEDIA': return 'priority-media';
      default: return 'priority-baja';
    }
  }
}
