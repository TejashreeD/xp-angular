import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { DisplayComponent } from './display/display.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {path: 'Form1', component: Form1Component},
  {path: 'Form1/:id', component: Form1Component},
  {path: 'Form2', component: Form2Component},
  {path: 'Display', component: DisplayComponent},
  {path: 'first', loadChildren: () => import('./second/second.module')
.then( mod => mod.SecondModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
