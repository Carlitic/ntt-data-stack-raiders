import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrioridadIncidencia } from '../models/incidencia.model';
import { Equipo } from '../models/equipo.model';
import { IncidenciaService } from '../services/incidencia.service';
@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {
  private incidenciaService = inject(IncidenciaService);
  ticketForm!: FormGroup;
  prioridades: PrioridadIncidencia[] = ['BAJA', 'MEDIA', 'ALTA', 'CRITICA'];

  // Equipos mock para el selector (esto vendría de un Servicio más adelante)
  equipos: Partial<Equipo>[] = [
    { id: 1, modelo: 'Dell Precision 5550', tipo: 'PORTATIL', estado: 'OPERATIVO' },
    { id: 2, modelo: 'Workstation Z4 G4', tipo: 'SOBREMESA', estado: 'OPERATIVO' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      prioridad: ['MEDIA', Validators.required],
      equipoId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      console.log('Creando ticket:', this.ticketForm.value);
      
      const payload: any = {
        descripcion: this.ticketForm.value.descripcion,
        prioridad: this.ticketForm.value.prioridad,
        equipo: { id: Number(this.ticketForm.value.equipoId) },
        empleado: { id: 1 },
        estado: 'ABIERTA',
        fechaReporte: new Date().toISOString().split('T')[0]
      };

      this.incidenciaService.createIncidencia(payload).subscribe({
        next: () => {
          alert('Ticket reportado con éxito');
          this.ticketForm.reset({ prioridad: 'MEDIA', equipoId: '' });
          window.location.reload();
        },
        error: (err) => {
          console.error('Error al guardar el ticket:', err);
          alert('Hubo un error al guardar el ticket en la base de datos.');
        }
      });
    } else {
      this.ticketForm.markAllAsTouched();
    }
  }

  // Helper para mostrar errores visuales
  isInvalid(field: string): boolean {
    const control = this.ticketForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
