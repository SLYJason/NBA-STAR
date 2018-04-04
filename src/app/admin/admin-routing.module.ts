import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';

import { AuthGuard } from '../auth.guard';
import { TopFiveDetailComponent } from './components/top-five-detail.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [{
          path: 'dashboard', component: AdminDashboardComponent
        }, {
          path: 'top-five', component: TopFiveDetailComponent
        }]
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
