import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadroComponent } from './components/cuadro/cuadro.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio',component: InicioComponent},
  {path: 'cuadro',component: CuadroComponent},
  {path : '**', redirectTo: 'inicio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
