export class Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  adresse: string;
  mdp: string;

  constructor(nom: string, prenom: string, adresse: string, mdp: string) {
    this.nom = nom || '';
    this.prenom = prenom || '';
    this.adresse = adresse || '';
    this.mdp = mdp || '';
  }
}