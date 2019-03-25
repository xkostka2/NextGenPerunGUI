import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
