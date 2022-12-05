import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MonstersPageComponent } from './pages/monsters-page/monsters-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'monsters', component: MonstersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
