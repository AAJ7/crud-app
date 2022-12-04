import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signinloading:boolean = true;
  signinunloading:boolean = false;
  confirmsignin()
  {
    this.signinloading = false;
    this.signinunloading = true;
  }

  signuploading:boolean = true;
  signupunloading:boolean = false;
  confirmsignup()
  {
    this.signuploading = false;
    this.signupunloading = true;
  }
}
