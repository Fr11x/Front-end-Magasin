import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiUrl = 'http://localhost:8080/api/commande';

  constructor(private http: HttpClient) { }

  creerCommande(utilisateurId: number): Observable<Commande> {
    return this.http.post<Commande>(`${this.apiUrl}/create/${utilisateurId}`, {});
  }

  getCommandeByUtilisateurId(utilisateurId: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/get/${utilisateurId}`);
  }
}
