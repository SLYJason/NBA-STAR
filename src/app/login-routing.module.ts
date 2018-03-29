import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class LoginRoutingModule {}
