import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchLotteryComponent } from './search-lottery/search-lottery.component';
import { CreateLotteryComponent } from './create-lottery/create-lottery.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditUserComponent } from './edit-user/edit-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchLotteryUserComponent } from './search-lottery-user/search-lottery-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    SearchLotteryComponent,
    CreateLotteryComponent,
    ManageUserComponent,
    CreateUserComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EditUserComponent,
    ResetPasswordComponent,
    SearchHistoryComponent,
    SearchLotteryUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'sua-xo-so', component: SearchLotteryComponent },
      { path: 'tao-xo-so', component: CreateLotteryComponent }
    ]),
    ReactiveFormsModule,
    NoopAnimationsModule,
    NgxPaginationModule,   //Source: https://www.npmjs.com/package/ngx-pagination
    Ng2SearchPipeModule,
    OrderModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTreeModule
  ],
  providers: [HttpClientModule,
    {
      // Source: https://www.youtube.com/watch?v=UrfhqE7I-3o&ab_channel=Codevolution
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
