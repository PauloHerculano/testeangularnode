import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-assuntoa',
  templateUrl: './assuntoa.component.html',
  styleUrls: ['./assuntoa.component.css']
})
export class AssuntoaComponent implements OnInit {
  assuntoEntrado = '';
  @Output() envioAssunto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    const assunto = this.assuntoEntrado;
    this.envioAssunto.emit(assunto);
  }


}
