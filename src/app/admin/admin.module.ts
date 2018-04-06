import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { StartLineupDetailComponent } from './components/start-lineup-detail/start-lineup-detail.component';
import { StartLineupComponent } from './components/start-lineup/start-lineup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, StartLineupDetailComponent, StartLineupComponent, DashboardComponent]
})
export class AdminModule { }
