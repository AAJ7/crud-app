import { FormControl, FormGroup , Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupvaluearray:any[] = [];

  constructor(private _HttpClient:HttpClient) { }

  ngOnInit(): void {
  }

  signupform:FormGroup = new FormGroup
  (
    {
      "name": new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(19)]),
      "username": new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password" : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(19)]),
      "repeatpassword" : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(19)]),
    }
  )


notsamepassword:boolean = false;
  signupuser:any;
  signupvalue(signupform:FormGroup)
  {


    this.signupuser = signupform.value.name;
    this._HttpClient.post<any>("http://localhost:3000/signup", signupform.value).subscribe
    (
      {
        next:()=>
        {
          if(signupform.get('password')?.value != signupform.get('repeatpassword')?.value)
          {
            alert("not the same password");
          }
          else
          {
            this.tosignin();
          }
        }
      }
    )
  }
  tosigninloading:boolean = true;
  tosigninunloading:boolean = false;
  tosignin()
  {
    this.tosigninloading = false;
    this.tosigninunloading = true;
  }
}
