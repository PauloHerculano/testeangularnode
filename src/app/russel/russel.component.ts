import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-russel',
  templateUrl: './russel.component.html',
  styleUrls: ['./russel.component.css']
})
export class RusselComponent implements OnInit {
  assuntoRecebido = 'Russell Westbrook';
  show;

  constructor() { }

  ngOnInit() {
  }

}
