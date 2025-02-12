import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inventaire } from '../models/inventaire.model';

@Injectable({
  providedIn: 'root'
})
export class InventaireService {
  private baseUrl = 'http://localhost:8080/inventaire';

  constructor(private http: HttpClient) {}

  importFromExcel(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(`${this.baseUrl}/import`, formData);
  }

  getAllInventaires(): Observable<Inventaire[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(
      map(data => data.map(item => new Inventaire(item.id, item.idDart, item.designation, item.stock, item.puHt)))
    );
  }

  getInventaireById(id: number): Observable<Inventaire> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map(item => new Inventaire(item.id, item.idDart, item.designation, item.stock, item.puHt))
    );
  }

  getInventaireByIdDart(idDart: number): Observable<Inventaire[]> {
    return this.http.get<any[]>(`${this.baseUrl}/idDart/${idDart}`).pipe(
      map(data => data.map(item => new Inventaire(item.id, item.idDart, item.designation, item.stock, item.puHt)))
    );
  }
}
