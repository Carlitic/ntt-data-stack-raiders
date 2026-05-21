export type Prioridad = 'BAJA' | 'MEDIA' | 'ALTA' | 'CRITICA';
export type EstadoIncidencia = 'ABIERTA' | 'EN_PROCESO' | 'RESUELTA';

export interface Empleado {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  departamento: string;
}

export interface Equipo {
  id: number;
  modelo: string;
  tipo: 'PORTATIL' | 'SOBREMESA' | 'SERVIDOR' | 'PERIFERICO';
  estado: string;
}

export interface Incidencia {
  id: number;
  descripcion: string;
  fechaReporte: Date;
  prioridad: Prioridad;
  estado: EstadoIncidencia;
  comentariosTecnico?: string;
  empleado: Empleado;
  equipo: Equipo;
}