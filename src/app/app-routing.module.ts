import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreatComponent } from "./posts/post-create/post-create.component";
import { TesteisaComponent } from './testeisa/testeisa.component'
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { UnderarmourComponent } from "./underarmour/underarmour.component";
import { PesquisaComponent } from "./pesquisa/pesquisa.component";
import { PesquisaTwoComponent } from "./pesquisa-two/pesquisa-two.component";
import { KevinComponent } from "./kevin/kevin.component";
import { LebronComponent } from "./lebron/lebron.component";
import { KyrieComponent } from "./kyrie/kyrie.component";
import { GiannisComponent } from "./giannis/giannis.component";
import { ZionComponent } from "./zion/zion.component";
import { RusselComponent } from "./russel/russel.component";
import { KembaComponent } from "./kemba/kemba.component";
import { JaysonComponent } from "./jayson/jayson.component";


const routes: Routes = [

    {path: "login", component: LoginComponent },
    {path: '', component: LoginComponent},
    {path: "signup", component: SignupComponent },

    /*Nike*/
    { path: "nike", component: TesteisaComponent },
    {path: "nikesearch", component: PesquisaComponent },
    {path: "giannis", component: GiannisComponent },
    {path: "kyrie", component: KyrieComponent },
    {path: "lebron", component: LebronComponent },
    {path: "kevin", component: KevinComponent },

    {path: 'create', component: PostCreatComponent},
    {path: 'edit/:postId', component: PostCreatComponent},
     /*Jordan*/

    { path: "jordan", component: UnderarmourComponent },
    {path: "jordansearch", component: PesquisaTwoComponent },
    {path: "zion", component: ZionComponent },
    {path: "russel", component: RusselComponent },
    {path: "kemba", component: KembaComponent },
    {path: "jayson", component: JaysonComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard]
})

export class AppRoutingModule{}