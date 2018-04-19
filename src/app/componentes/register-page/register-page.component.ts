import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public authService: AuthService, 
    public router: Router, public flashMesaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitAddUser() {

    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.flashMesaje.show('Usuarios Creado Correctamente', {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(['/private']);
      console.log('Bien ');
      console.log(res);

    })
    .catch((err) => {
      this.flashMesaje.show(err.message, {cssClass: 'alert-danger', timeout:4000});
    });
  }

}
