import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewComponent },
  {path: 'edit', component: EditComponent}
]

@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
