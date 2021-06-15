import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-comunicacion-componentes';
  file: any = null;
  constructor() {

  }

  ngOnInit(): void {
  }

  getFile($event: any): void {

  }

  upload(): void {



  }
}
