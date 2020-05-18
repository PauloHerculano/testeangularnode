import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lebron',
  templateUrl: './lebron.component.html',
  styleUrls: ['./lebron.component.css']
})
export class LebronComponent implements OnInit {
  assuntoRecebido = 'LeBron James';
  show;

  constructor() { }

  ngOnInit() {
  }

}
