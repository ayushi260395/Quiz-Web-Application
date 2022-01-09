import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values : any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.getValues();
    
  }
  getValues(){
     return this.http.get("https://b82c6535-7c99-468f-b64d-e02dc555bb4e.mock.pstmn.io/1").subscribe(response=>{
      console.log(response);
       this.values = response;

     },error =>{
       console.log(error);
    });
  }

}
