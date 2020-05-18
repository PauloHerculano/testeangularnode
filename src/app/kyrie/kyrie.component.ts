import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyrie',
  templateUrl: './kyrie.component.html',
  styleUrls: ['./kyrie.component.css']
})
export class KyrieComponent implements OnInit {
  assuntoRecebido = 'Kyrie Irving';
  show;

  constructor() { }

  ngOnInit() {
  }

}
