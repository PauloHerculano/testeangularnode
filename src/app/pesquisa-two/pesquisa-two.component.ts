import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-two',
  templateUrl: './pesquisa-two.component.html',
  styleUrls: ['./pesquisa-two.component.css']
})
export class PesquisaTwoComponent implements OnInit {
  assuntoRecebido = '';


  constructor() { 
 
  }

  ngOnInit() {

  }

  onAssuntoPassado(assunto){
    this.assuntoRecebido = assunto;
  }


}