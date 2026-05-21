import { Empleado } from './empleado.model.ts';

export type TipoEquipo = 'PORTATIL' | 'SOBREMESA' | 'SERVIDOR' | 'PERIFERICO';
export type EstadoEquipo = 'OPERATIVO' | 'REPARACION' | 'BAJA';

export interface Equipo {
  id: number;
  modelo: string;
  tipo: TipoEquipo;
  fechaAdquisicion: string;
  estado: EstadoEquipo;
  empleado: Empleado; // Relación ManyToOne con Empleado
}
