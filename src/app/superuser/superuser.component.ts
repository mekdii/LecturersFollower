import { Component, OnInit } from '@angular/core';

import { SuperuserService } from '../shared/superuser.service';// from superuser service class

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css'],
  providers : [SuperuserService],
})
export class SuperuserComponent implements OnInit {

  constructor( public superUserService : SuperuserService) { }

  ngOnInit(): void {
  }

}
