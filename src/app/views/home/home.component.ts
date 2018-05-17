import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-header></app-header>
  <app-intro></app-intro>
  <app-services></app-services>
  <app-portfolio-carousel></app-portfolio-carousel>
  <app-cta></app-cta>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
