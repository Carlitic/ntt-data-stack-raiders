import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Prioridad, Equipo } from './incidencia.model';
@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {
  ticketForm!: FormGroup;
  prioridades: Prioridad[] = ['BAJA', 'MEDIA', 'ALTA', 'CRITICA'];

  // Equipos mock para el selector (esto vendría de un Servicio más adelante)
  equipos: Equipo[] = [
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
      // Lógica de envío al servicio API REST
      alert('Ticket reportado con éxito');
      this.ticketForm.reset({ prioridad: 'MEDIA', equipoId: '' });
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
