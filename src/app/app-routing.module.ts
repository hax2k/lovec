import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { DatabaseComponent } from './database/database.component';
import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: '', component:NameComponent},
  {path: 'name', component:NameComponent},
  {path: 'calc', component:CalcComponent},
  {path: 'video', component:VideoComponent},
  {path: 'home', component:HomeComponent},
  {path: 'database', component:DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
