import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidencia } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  http = inject(HttpClient);

  apiUrl = 'http://localhost:8080/api/incidencias';

  getIncidencias(): Observable<Incidencia[]> {
    return this.http.get<Incidencia[]>(this.apiUrl);
  }

  createIncidencia(incidencia: Incidencia): Observable<Incidencia> {
    return this.http.post<Incidencia>(this.apiUrl, incidencia);
  }

  updateIncidencia(id: number, incidencia: Incidencia): Observable<Incidencia> {
    return this.http.put<Incidencia>(`${this.apiUrl}/${id}`, incidencia);
  }
}
