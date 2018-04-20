import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;
  public fotoUser: string;

  constructor(public authService: AuthService ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.isLogin =true;
        this.nombreUser = auth.displayName;
        this.emailUser  = auth.email;
        this.fotoUser = auth.photoURL;
      } else{

        this.isLogin = false;
      }
    })
  }
onClickLogout(){


  this.authService.logout();
}


}
