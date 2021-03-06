import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService,
  public router: Router, public flashMesaje: FlashMessagesService) { }

  ngOnInit() {
  }

  //login con email
onSubmitLogin() {
  this.authService.loginEmail(this.email, this.password)
  .then((res) => {
    this.flashMesaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
    this.router.navigate(['/private']);
  }).catch((err) => {
    this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
    console.log(err);
    this.router.navigate(['/login']);
  });



}
//loguearse con google

onClickGoogleLogin() {
this.authService.loginGoogle()

.then((res) => {
this.flashMesaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
this.router.navigate(['/private']);


}).catch((err) => {
  this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
  console.log(err);
  this.router.navigate(['/login']);
});


}

onClickFacebookLogin(){
this.authService.loginFacebook()
.then((res) => {
   this.flashMesaje.show('Usuarios logueado Correctamente', {cssClass: 'alert-success', timeout:4000})
  this.router.navigate(['/private']);
})

.catch((err) => {
  this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000})
  console.log(err);
  this.router.navigate(['/login']);
});
}

}
