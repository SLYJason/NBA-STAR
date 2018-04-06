import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from '../auth.guard';
import { StartLineupDetailComponent } from './components/start-lineup-detail/start-lineup-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
          path: 'dashboard', component: DashboardComponent
          },
          {
          path: 'start-lineup', component: StartLineupDetailComponent
        }]
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
