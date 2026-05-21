import { Empleado } from './empleado.model.ts';
import { Equipo } from './equipo.model.ts';

export type PrioridadIncidencia = 'BAJA' | 'MEDIA' | 'ALTA' | 'CRITICA';
export type EstadoIncidencia = 'ABIERTA' | 'EN_PROCESO' | 'RESUELTA';

export interface Incidencia {
  id: number;
  descripcion: string;
  fechaReporte: string;
  prioridad: PrioridadIncidencia;
  estado: EstadoIncidencia;
  comentariosTecnico: string;
  empleado: Empleado; // Entidad pivote
  equipo: Equipo;     // Entidad pivote
}
