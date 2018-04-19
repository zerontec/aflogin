import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {


  constructor(public authService: AuthService) { }
  public email: string;
  public password: string;
  public router: Router;
  ngOnInit() {
  }

  onSubmitAddUser() {

    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/private']);
      console.log('Bien ');
      console.log(res);

    })
    .catch((err) => {
      console.log(err);
      this.router.navigate(['/register']);

    });
  }

}
