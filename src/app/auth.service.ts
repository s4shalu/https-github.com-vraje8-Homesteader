import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }
    login(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);

      this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
      
    }
    logout(){
      this.afAuth.signOut(); 
    }
    get appUser$(): Observable<AppUser>{
      return this.user$.pipe(
        switchMap((user: firebase.User) => {
        if (user) return this.userService.get(user.uid);
        return observableOf(null);
        })
      )
    }
   
}
