import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { ForgotpasswordComponent } from './superuser/forgotpassword/forgotpassword.component';
import { RegistorComponent } from './registor/registor.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';


import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    SuperuserComponent,
    ForgotpasswordComponent,
    RegistorComponent,
    ShowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
