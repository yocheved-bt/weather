import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { DDList } from 'src/app/types';

@Component({
  selector: 'qk-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

   dataService;
   temp

  constructor( dataService: DataService) { 
    this.dataService = dataService;
  }
  valueChange(value: DDList): void {
    this.temp = value;
    console.log("settings componets", this.temp)
  }

  ngOnInit(): void {
  }

}
