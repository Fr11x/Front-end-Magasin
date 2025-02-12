export class Inventaire {
    id: number;
    idDart: number;
    designation: string;
    stock?: number;
    puHt?: number;
  
    constructor(id: number, idDart: number, designation: string, stock?: number, puHt?: number) {
      this.id = id;
      this.idDart = idDart;
      this.designation = designation;
      this.stock = stock;
      this.puHt = puHt;
    }
  
    // Méthode pour afficher un résumé de l'inventaire
    getSummary(): string {
      return `ID: ${this.id} | ID Dart: ${this.idDart} | Désignation: ${this.designation} | Stock: ${this.stock ?? 'Non défini'} | Prix HT: ${this.puHt ?? 'Non défini'} €`;
    }
  }
  