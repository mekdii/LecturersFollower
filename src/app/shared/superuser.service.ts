import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Superuser } from './superuser.=model';



@Injectable({
  providedIn: 'root'
})
export class SuperuserService {
  selectedSuperuser : Superuser; //for inserting and updating subadmins
  superusers : Superuser[];//for storing subadmins

  constructor() { }
}
