import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private _HttpClient:HttpClient) { }

  ngOnInit(): void {
  }
  signinform:FormGroup = new FormGroup
  (
    {
      "username": new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
      "password" : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(19)]),
    }
  )
  signinvalue(signinform:FormGroup)
  {
    this._HttpClient.get<any>("http://localhost:3000/signup").subscribe
    (
      {
        next:(values)=>
        {
          const user = values.find((value:any)=>
          {
            return (value.username === this.signinform.value.username && value.password === this.signinform.value.password);
          });
          if(user)
          {
            this.tocrud();
          }
          else
          {
            alert("User not found");
          }
        },
      }
    )
  }



  tosignuploading:boolean = true;
  tosignupunloading:boolean = false;
  tosignup()
  {
    this.tosignuploading = false;
    this.tosignupunloading = true;
  }

  tocrudloading:boolean = true;
  tocrudunloading:boolean = false;
  tocrud()
  {
    this.tocrudloading = false;
    this.tocrudunloading = true;
  }
}
