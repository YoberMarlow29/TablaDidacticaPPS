import { Component, inject } from '@angular/core';
import {IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';



@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone:true,
  imports:[IonContent]
})
export class SplashComponent   {

  router_service = inject(Router);

  constructor(private platform:Platform) { }

  ionViewDidEnter()
  {
    this.platform.ready().then(() => 
    {
      SplashScreen.hide().then(()=>
      {
        setTimeout(() => 
        {
          this.router_service.navigate(['/login'])
        }, 3000);
      })
    });
  }



}
