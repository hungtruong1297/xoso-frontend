import { CreateLotteryComponent } from './create-lottery/create-lottery.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AppComponent } from './app.component';
import { SearchLotteryComponent } from './search-lottery/search-lottery.component';
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
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ResetPasswordComponent },
  {
    path: 'manage-user',
    component: ManageUserComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'create-lottery',
    component: CreateLotteryComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'search-lottery',
    component: SearchLotteryComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'search-lottery-user',
    component: SearchLotteryUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search-history',
    component: SearchHistoryComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
