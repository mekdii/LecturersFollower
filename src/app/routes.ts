import { Routes } from '@angular/router';
import { SuperuserComponent } from './superuser/superuser.component';
import { RegistorComponent } from './registor/registor.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';

export const appRoutes : Routes = [
    {
        path : "" , component : SuperuserComponent,
        children : [{path : '' , component : RegistorComponent }]
    },


    {
        path : "home" , component : HomeComponent,
        children : [{path : '' , component : RegistorComponent }]
    },
    {
        path : "show" , component : ShowComponent,
        children : [{path : '' , component : RegistorComponent }]
    },
    {
        path : "registor" , component : RegistorComponent,
       
    }
];