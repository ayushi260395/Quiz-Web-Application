import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onRegister(data:any) {
  {
      this.http.post('https://httpbin.org/post',data).subscribe(response =>
      {
        console.log("response",response);
      })
      console.log(data);

  }
}
}