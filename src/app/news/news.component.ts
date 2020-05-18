import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  totalAngularPackages;
  totalPackages;
  @Input() assunto!: string;
  sentimento ='';

  testea ='';
  testeb ='';
  testec ='';
  tested ='';
  
  contenta = '';
  titlea = '';
  urla = '';
  nlua = '';
  
  contentb = '';
  titleb = '';
  urlb = '';
  nlub = '';
  
  contentc = '';
  titlec = '';
  urlc = '';
  nluc = '';
  
  contentd = '';
  titled = '';
  urld = '';
  nlud = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  ngOnChanges(){

    this.contenta = '';
    this.titlea = '';
    this.urla = '';
    this.nlua = '';
    
    this.contentb = '';
    this.titleb = '';
    this.urlb = '';
    this.nlub = '';
    
    this.contentc = '';
    this.titlec = '';
    this.urlc = '';
    this.nluc = '';
    
    this.contentd = '';
    this.titled = '';
    this.urld = '';
    this.nlud = '';

    this.http.get<any>('https://newsapi.org/v2/everything?q=' + this.assunto +'&apiKey=82387374b5dd401bbf5bede554da0d7c')
    .subscribe(data => {
    this.totalAngularPackages = data;
   
    this.titlea += this.totalAngularPackages.articles[0].title;
    this.contenta += this.totalAngularPackages.articles[0].description;
    this.urla += this.totalAngularPackages.articles[0].url;
    this.nlua += this.totalAngularPackages.articles[0].content;

    this.titleb += this.totalAngularPackages.articles[1].title;
    this.contentb += this.totalAngularPackages.articles[1].description;
    this.urlb += this.totalAngularPackages.articles[1].url;
    this.nlub += this.totalAngularPackages.articles[0].content;

    this.titlec += this.totalAngularPackages.articles[2].title;
    this.contentc += this.totalAngularPackages.articles[2].description;
    this.urlc += this.totalAngularPackages.articles[2].url;
    this.nluc += this.totalAngularPackages.articles[0].content;

    this.titled += this.totalAngularPackages.articles[3].title;
    this.contentd += this.totalAngularPackages.articles[3].description;  
    this.urld += this.totalAngularPackages.articles[3].url;
    this.nlud += this.totalAngularPackages.articles[0].content;

    }
    // this.saida = this.totalAngularPackages.articles[0].source.name;
    // this.saida = JSON.stringify(this.totalAngularPackages);
  );
  }

  onClicka(){
    this.http.get<any>('http://teste-2-comnlu-git-default.paulocluster-446187-8043619bfac6ae0aca0ea5c921aedb17-0000.sao01.containers.appdomain.cloud/nlu?text=' + this.urla)
    .subscribe(data => {
    this.totalPackages = data;
       this.testea = this.totalPackages.result.sentiment.document.label;
  });
  }

  onClickb(){
    this.http.get<any>('http://teste-2-comnlu-git-default.paulocluster-446187-8043619bfac6ae0aca0ea5c921aedb17-0000.sao01.containers.appdomain.cloud/nlu?text=' + this.urlb)
    .subscribe(data => {
    this.totalPackages = data;
       this.testeb = this.totalPackages.result.sentiment.document.label;
  });
  }

  onClickc(){
    this.http.get<any>('http://teste-2-comnlu-git-default.paulocluster-446187-8043619bfac6ae0aca0ea5c921aedb17-0000.sao01.containers.appdomain.cloud/nlu?text=' + this.urlc)
    .subscribe(data => {
    this.totalPackages = data;
       this.testec = this.totalPackages.result.sentiment.document.label;
  });
  }

  onClickd(){
    this.http.get<any>('http://teste-2-comnlu-git-default.paulocluster-446187-8043619bfac6ae0aca0ea5c921aedb17-0000.sao01.containers.appdomain.cloud/nlu?text=' + this.urld)
    .subscribe(data => {
    this.totalPackages = data;
       this.tested = this.totalPackages.result.sentiment.document.label;
  });
  }

  
  // this.testea = JSON.stringify(this.totalPackages);

}


