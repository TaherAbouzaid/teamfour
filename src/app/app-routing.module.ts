import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component'; 
const routes: Routes = [
  {path: 'home',component: IndexComponent},
  {path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
