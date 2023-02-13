import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
// import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { PessoasCreateComponent } from './pessoas-create/pessoas-create.component';


const routes: Routes = [
  {path: '', component: PessoasCreateComponent},
  {path: 'pagina1', component: Page1Component},
  {path: 'pagina2', component: Page2Component},
  {path: 'pagina3', component: Page3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
