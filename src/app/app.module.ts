import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'sua-xo-so', component: SearchLotteryComponent },
      { path: 'tao-xo-so', component: CreateLotteryComponent },
      { path: 'create-user', component: CreateUserComponent },
    ]),
    ReactiveFormsModule,
    NoopAnimationsModule,
    NgxPaginationModule
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
