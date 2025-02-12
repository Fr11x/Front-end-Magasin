export class Commande {
    id: number;
    utilisateurId: number;
    statut: string;
    prixTotal: number;
  
    constructor(id: number, utilisateurId: number, statut: string, prixTotal: number) {
      this.id = id;
      this.utilisateurId = utilisateurId;
      this.statut = statut;
      this.prixTotal = prixTotal;
    }
  }