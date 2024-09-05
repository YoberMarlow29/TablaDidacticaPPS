import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonInput, IonButton, IonLabel, IonRow, IonGrid,
  IonText, IonCol, IonToggle
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonToggle, IonCol, IonText, IonGrid,
    IonRow, IonButton, IonInput,
    IonItem, IonContent, IonHeader, IonTitle,
    IonToolbar, CommonModule, FormsModule, IonLabel]
})
export class LoginPage {

  protected email: string = '';
  protected password: string = '';

  constructor(private router: Router, private auth: AuthService) { }

  async btnLogin() {
    try {
      await this.auth.login(this.email, this.password);
      console.log("inicio de sesion exitoso");
      this.router.navigate(['/home']);
      this.clearInputs();
      this.resetCheckboxes();
    } catch (error) {
      console.error("error al iniciar sesion", error);
    }
  }

  btnUsuarioUno() {
    this.email = "admin@admin.com";
    this.password = "111111";
  }

  btnUsuarioDos() {
    this.email = "invitado@invitado.com";
    this.password = "222222";
  }

  btnUsuarioTres() {
    this.email = "usuario@usuario.com";
    this.password = "333333";
  }

  toggleCheckbox(event: { target: any; }) {
    const checkbox = event.target as HTMLInputElement;
    const slider :any = checkbox.nextElementSibling;
    if (checkbox.checked) {
      // Desmarcar los otros checkboxes
      const checkboxes = document.querySelectorAll('.switch input[type="checkbox"]');
      checkboxes.forEach((value: Element) => {
        const otherCheckbox = value as HTMLInputElement;
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
          const otherSlider = otherCheckbox.nextElementSibling;
          if (otherSlider) {
            otherSlider.classList.remove('checked');
          }
        }
      });
      slider.classList.add('checked');
    } else {
      slider.classList.remove('checked');
    }
  }

  clearInputs() {
    this.email = '';
    this.password = '';
  }

  resetCheckboxes() {
    const checkboxes = document.querySelectorAll('.switch input[type="checkbox"]');
    checkboxes.forEach((value: Element) => {
      const checkbox = value as HTMLInputElement;
      checkbox.checked = false;
      const slider = checkbox.nextElementSibling;
      if (slider) {
        slider.classList.remove('checked');
      }
    });
  }
}
