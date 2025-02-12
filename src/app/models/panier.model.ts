export class Panier {
  id: number;
  utilisateurId: number;
  panierArticles: any[];
  prixTotal: number;

  constructor(id: number, utilisateurId: number, panierArticles: any[], prixTotal: number) {
    this.id = id;
    this.utilisateurId = utilisateurId;
    this.panierArticles = panierArticles;
    this.prixTotal = prixTotal;
  }
}