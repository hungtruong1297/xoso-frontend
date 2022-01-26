import { SearchLotteryUserComponent } from './search-lottery-user/search-lottery-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RoleGuard } from './role.guard';
import { CanActivate } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ResetPasswordComponent },
  {
    path: 'manage-user',
    component: ManageUserComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard, RoleGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
