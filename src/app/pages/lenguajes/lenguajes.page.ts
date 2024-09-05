import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFabButton, IonFabList, IonFab, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { globe } from 'ionicons/icons';


@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.page.html',
  styleUrls: ['./lenguajes.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFab, IonFabList, IonFabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LenguajesPage {
  @Output() idiomaSeleccionado = new EventEmitter<string>();
  idiomaActual: string;

  constructor() {
    this.idiomaActual = 'es'; // Idioma por defecto
    addIcons({ globe });
  }

  seleccionarIdioma(idioma: string) {
    // Cambiar el idioma solo si es diferente del idioma actual
    if (this.idiomaActual !== idioma) {
      this.idiomaActual = idioma;
      this.idiomaSeleccionado.emit(idioma);
    }
  }
}
