import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { PostCreatComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { TesteisaComponent } from './testeisa/testeisa.component';
import { UnderarmourComponent } from './underarmour/underarmour.component';
import { HeaderUaComponent } from './header-ua/header-ua.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PlayerComponent } from './player/player.component';
import { PlayeTwoComponent } from './playe-two/playe-two.component';
import { PesquisaTwoComponent } from './pesquisa-two/pesquisa-two.component';
import { LebronComponent } from './lebron/lebron.component';
import { GiannisComponent } from './giannis/giannis.component';
import { KyrieComponent } from './kyrie/kyrie.component';
import { KevinComponent } from './kevin/kevin.component';
import { ZionComponent } from './zion/zion.component';
import { RusselComponent } from './russel/russel.component';
import { KembaComponent } from './kemba/kemba.component';
import { JaysonComponent } from './jayson/jayson.component';
import { NewsComponent } from './news/news.component';
import { TwitterComponent } from './twitter/twitter.component';
import { AssuntoaComponent } from './assuntoa/assuntoa.component';
import { AssuntobComponent } from './assuntob/assuntob.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreatComponent,
    HeaderComponent,
    PostListComponent,
    TesteisaComponent,
    UnderarmourComponent,
    LoginComponent,
    SignupComponent,
    HeaderUaComponent,
    PesquisaComponent,
    PlayerComponent,
    PlayeTwoComponent,
    PesquisaTwoComponent,
    LebronComponent,
    GiannisComponent,
    KyrieComponent,
    KevinComponent,
    ZionComponent,
    RusselComponent,
    KembaComponent,
    JaysonComponent,
    NewsComponent,
    TwitterComponent,
    AssuntoaComponent,
    AssuntobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
