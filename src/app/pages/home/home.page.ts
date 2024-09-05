import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { LenguajesPage } from '../lenguajes/lenguajes.page';
import { SeleccionTemasPage } from '../seleccion-temas/seleccion-temas.page';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, IonFabButton, IonFab, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,LenguajesPage,SeleccionTemasPage]
})
export class HomePage  {

  orientation: 'portrait' | 'landscape' = 'portrait';

  constructor(private auth:AuthService,private router:Router) { }

  idiomaSeleccionado: string = 'es';
  temaSeleccionado: string = 'colores';

  onIdiomaSeleccionado(idioma: string) {
    this.idiomaSeleccionado = idioma;
  }

  onTemaSeleccionado(tema: string) {
    this.temaSeleccionado = tema;
  }

  reproducirAudio(nombreArchivo: string) {
    const ruta = `assets/audio/${this.idiomaSeleccionado}/${this.temaSeleccionado}/${nombreArchivo}.mp3`;
    const audio = new Audio();
    audio.src = ruta;
    audio.load();
    audio.play();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkOrientation();
  }

  checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
      this.orientation = 'portrait';
    } else {
      this.orientation = 'landscape';
    }

  }

  btnSalir() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.log('Error al cerrar sesión:', error);
    });
  }
}
