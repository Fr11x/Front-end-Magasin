import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { FormGroup } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    CommandeComponent,
    ProduitComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,  
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
