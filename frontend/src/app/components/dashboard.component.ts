import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incidencia } from '../../models/incidencia.model';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  incidencias: Incidencia[] = [];
  stats = { abierta: 0, enProceso: 0, resuelta: 0 };

  ngOnInit(): void {
    // Carga de datos mock para validar la visualización
    this.incidencias = [
      {
        id: 1,
        descripcion: 'Fallo crítico en el servidor de base de datos',
        prioridad: 'CRITICA',
        estado: 'ABIERTA',
        fechaReporte: new Date(),
        empleado: { id: 1, nombre: 'Jorge', apellidos: 'Admin', email: 'jorge@stack.com', departamento: 'IT' },
        equipo: { id: 101, modelo: 'PowerEdge R740', tipo: 'SERVIDOR', estado: 'OPERATIVO' }
      },
      {
        id: 2,
        descripcion: 'Actualización de drivers de periféricos',
        prioridad: 'BAJA',
        estado: 'EN_PROCESO',
        fechaReporte: new Date(),
        empleado: { id: 2, nombre: 'Ana', apellidos: 'López', email: 'ana@stack.com', departamento: 'Ventas' },
        equipo: { id: 102, modelo: 'Logitech G-Series', tipo: 'PERIFERICO', estado: 'OPERATIVO' }
      }
    ];
    this.calculateStats();
  }

  private calculateStats(): void {
    // Usamos filter para obtener los totales por estado
    this.stats.abierta = this.incidencias.filter(i => i.estado === 'ABIERTA').length;
    this.stats.enProceso = this.incidencias.filter(i => i.estado === 'EN_PROCESO').length;
    this.stats.resuelta = this.incidencias.filter(i => i.estado === 'RESUELTA').length;
  }

  getPriorityClass(prioridad: string): string {
    // Retorna la clase CSS mnemotécnica definida en dashboard.component.css
    return `priority-${prioridad.toLowerCase()}`;
  }
}
})
export class DashboardComponent implements OnInit {
  incidencias: Incidencia[] = [];
  stats = { abierta: 0, enProceso: 0, resuelta: 0 };

  ngOnInit(): void {
    // Mock de datos iniciales para maquetación
    this.incidencias = [
      {
        id: 1,
        descripcion: 'Pantalla azul al iniciar Windows',
        prioridad: 'CRITICA',
        estado: 'ABIERTA',
        fechaReporte: new Date(),
        empleado: { nombre: 'Ana', apellidos: 'García' } as any,
        equipo: { modelo: 'Dell Latitude 5420' } as any
      },
      {
        id: 2,
        descripcion: 'Configuración de nuevo ratón',
        prioridad: 'BAJA',
        estado: 'EN_PROCESO',
        fechaReporte: new Date(),
        empleado: { nombre: 'Luis', apellidos: 'Pérez' } as any,
        equipo: { modelo: 'Periférico genérico' } as any
      }
    ];
    this.calculateStats();
  }

  private calculateStats(): void {
    this.stats.abierta = this.incidencias.filter(i => i.estado === 'ABIERTA').length;
    this.stats.enProceso = this.incidencias.filter(i => i.estado === 'EN_PROCESO').length;
    this.stats.resuelta = this.incidencias.filter(i => i.estado === 'RESUELTA').length;
  }

  getPriorityClass(prioridad: string): string {
    return `priority-${prioridad.toLowerCase()}`;
  }
}