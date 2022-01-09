import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginModel } from './login.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
    onSubmit(f: NgForm) {
      const loginObserver = {
        next: (_x: any) => console.log('User Logged In'),
        error: (err: any) => console.log(err)
      }
        this.authService.login(f.value).subscribe(loginObserver);

    }
}
