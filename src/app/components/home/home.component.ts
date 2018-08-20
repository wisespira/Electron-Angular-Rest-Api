import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

import {User} from "../../providers/Interfaces/user";
import { UsefullAppsService } from '../../providers/usefulApps'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electron: ElectronService,
    private uA: UsefullAppsService) { }

    users: any;
  ngOnInit() {
  }

  closeWindow() {
    this.electron.window.close();

  }
  minimizeWindow() {
    this.electron.window.minimize();
  }
  getUsers() {
       this.uA.getUsers()
           .then(data => {
               this.users = data;
               console.log(this.users);
           });
   }

}
