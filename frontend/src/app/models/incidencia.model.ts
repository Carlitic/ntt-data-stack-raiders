import { Empleado } from './empleado.model';
import { Equipo } from './equipo.model';

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
