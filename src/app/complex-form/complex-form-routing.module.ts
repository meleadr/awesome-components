import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComplexFormComponent} from "./components/complex-form/complex-form.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', component: ComplexFormComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ComplexFormRoutingModule { }
