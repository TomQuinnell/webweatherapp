import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./main-menu/main-menu.module').then(m => m.MainMenuModule)
  },
  {
    path: 'snapshot',
    /* TODO Guards??
    canActivate: [SimulationGuard],
    canLoad: [SimulationGuard],
    canDeactivate: [SimulationGuard],
    */
    loadChildren: () => import('./snapshot/snapshot.module').then(m => m.SnapshotModule)
  },
  {
    path: '**',
    redirectTo: '/menu'
  }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
