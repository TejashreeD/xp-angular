import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'comp1', component: Comp1Component},
  {path: 'comp2', component: Comp2Component}
];

@NgModule({
  declarations: [Comp1Component, Comp2Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class SecondModule { }
