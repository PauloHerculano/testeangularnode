import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giannis',
  templateUrl: './giannis.component.html',
  styleUrls: ['./giannis.component.css']
})
export class GiannisComponent implements OnInit {
  assuntoRecebido = 'Giannis Antetokounmpo';
  show;


  constructor() { }

  ngOnInit() {
  }

}
