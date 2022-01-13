import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchLotteryComponent } from './search-lottery/search-lottery.component';
import { CreateLotteryComponent } from './create-lottery/create-lottery.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchLotteryComponent,
    CreateLotteryComponent,
    ManageUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'sua-xo-so', component: SearchLotteryComponent },
      { path: 'tao-xo-so', component: CreateLotteryComponent },
      { path: 'create-user', component: CreateUserComponent }
    ])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
