import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { CrisisDetailComponent } from './components/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, CrisisDetailComponent]
})
export class AdminModule { }
