import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ 
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialisation du formulaire avec des validateurs
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required, this.stringValidator]],
      prenom: ['', [Validators.required, this.stringValidator]],
      adresse: ['', [Validators.required, this.stringValidator, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6), this.stringValidator]]  // Ajout de la validation pour le mot de passe
    });
  }

  // Valide que la valeur est une chaîne de caractères
  stringValidator(control: any): { [key: string]: boolean } | null {
    if (control.value && typeof control.value !== 'string') {
      return { notString: true };
    }
    return null;
  }

  // Soumission du formulaire
  onRegister(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        () => alert('Utilisateur enregistré avec succès !'),
        () => alert('Erreur d\'enregistrement')
      );
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
