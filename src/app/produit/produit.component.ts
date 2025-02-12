import { Component, OnInit } from '@angular/core';
import { InventaireService } from '../services/inventaire.service';
import { Inventaire } from '../models/inventaire.model';

@Component({
  selector: 'app-produit',
  standalone: false,
  
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  inventaires: Inventaire[] = [];

  constructor(private inventaireService: InventaireService) {}

  ngOnInit(): void {
    this.fetchInventaires();
  }

  fetchInventaires(): void {
    this.inventaireService.getAllInventaires().subscribe(
      (data: Inventaire[]) => {
        console.log("Données reçues depuis l'API :", data); // DEBUG
        this.inventaires = data;
      },
      (error) => {
        console.error("Erreur lors de la récupération des inventaires", error);
      }
    );
  }
  
}