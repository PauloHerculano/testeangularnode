import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kevin',
  templateUrl: './kevin.component.html',
  styleUrls: ['./kevin.component.css']
})
export class KevinComponent implements OnInit {
  assuntoRecebido = 'Kevin Durant';
  show;

  constructor() { }

  ngOnInit() {
  }

}
