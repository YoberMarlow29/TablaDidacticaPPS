import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirebase : Auth) { }

  login(email : string, password: string){

    return signInWithEmailAndPassword(this.authFirebase,email,password)
  }

  logout() {
    return this.authFirebase.signOut();
  }
}
