import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/AuthService';
import { LayoutComponent } from './layout/layout.component';
import { MpComponent } from './mp/mp.component';
import {DataTablesModule} from 'angular-datatables';
import {NgSelectModule} from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  /* {path:"home",component:LayoutComponent},*/
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  /* { path: "**", component: Page1Component },*/
  {path: '',
    component: LayoutComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      /*  {path:"home",component:LayoutComponent},*/
      {path: 'home', component: HomeComponent},
      {path: 'update', component: MpComponent},

    ]

  },

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MpComponent,
    LayoutComponent,
    MpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, NgSelectModule, DataTablesModule, ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
