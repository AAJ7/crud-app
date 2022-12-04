import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loading:boolean = true;
  unloading:boolean = false;
  confirm()
  {
    this.loading = false;
    this.unloading = true;
  }

}
