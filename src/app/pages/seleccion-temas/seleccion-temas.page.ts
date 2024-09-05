import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFabButton, IonFabList, IonIcon, IonFab } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { book } from 'ionicons/icons';

@Component({
  selector: 'app-seleccion-temas',
  templateUrl: './seleccion-temas.page.html',
  styleUrls: ['./seleccion-temas.page.scss'],
  standalone: true,
  imports: [IonFab, IonIcon, IonFabList, IonFabButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SeleccionTemasPage implements OnInit {
  @Output() temaSeleccionado = new EventEmitter<string>();
  temaActual: string;

  constructor() {
    this.temaActual = 'colores'; // Tema por defecto
    addIcons({ book });
  }

  ngOnInit() {
    // Emitir el tema por defecto al cargar la página
    this.seleccionarTema(this.temaActual);
  }

  seleccionarTema(tema: string) {
    // Cambiar el tema solo si es diferente del tema actual
    if (this.temaActual !== tema) {
      this.temaActual = tema;
      this.temaSeleccionado.emit(tema);
    }
  }
}
