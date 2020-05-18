import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kemba',
  templateUrl: './kemba.component.html',
  styleUrls: ['./kemba.component.css']
})
export class KembaComponent implements OnInit {
  assuntoRecebido = 'Kemba Walker';
  show;

  constructor() { }

  ngOnInit() {
  }

}
