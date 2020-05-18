import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-assuntob',
  templateUrl: './assuntob.component.html',
  styleUrls: ['./assuntob.component.css']
})
export class AssuntobComponent implements OnInit {
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
