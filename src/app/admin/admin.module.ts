import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent]
})
export class AdminModule { }
