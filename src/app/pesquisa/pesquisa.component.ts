import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  assuntoRecebido = '';


  constructor() { 
 
  }

  ngOnInit() {

  }

  onAssuntoPassado(assunto){
    this.assuntoRecebido = assunto;
  }


}
