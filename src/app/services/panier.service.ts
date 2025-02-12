import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier } from '../models/panier';
import { PanierArticle } from '../models/panier-article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private apiUrl = 'http://localhost:8080/api/panier';

  constructor(private http: HttpClient) { }

  creerPanier(utilisateurId: number): Observable<Panier> {
    return this.http.post<Panier>(`${this.apiUrl}/create/${utilisateurId}`, {});
  }

  ajouterArticleAuPanier(utilisateurId: number, inventaireId: number, quantite: number): Observable<Panier> {
    return this.http.post<Panier>(`${this.apiUrl}/add/${utilisateurId}`, { inventaireId, quantite });
  }

  retirerArticleDuPanier(utilisateurId: number, panierArticleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${utilisateurId}/${panierArticleId}`);
  }

  getPanierByUtilisateurId(utilisateurId: number): Observable<Panier> {
    return this.http.get<Panier>(`${this.apiUrl}/get/${utilisateurId}`);
  }
}