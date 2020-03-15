import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { DataService } from '../../services/data.service';
import { DDList, Weather, Settings } from 'src/app/types';


@Component({
  selector: 'qk-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

  dataService;
  subscription: Subscription;
  isChange: boolean;
  tempData: Settings

  constructor(private router: Router, dataService: DataService) {
    this.dataService = dataService;
  }
  valueChange(val): void {
    this.isChange = true;
    this.tempData[val.name] = val.event;
  }

  update() {
    if (this.isChange) { // data changed
      this.dataService.settData = this.tempData;
      this.subscription = this.dataService.getDetails().subscribe(
        (data: Weather) => {
          console.log('@@@@@@@@@@@@@@@@@ data @@@@@', data);
          this.navigate();

        }
      );
    }
    else { // data not changed
      this.navigate();
    }

  }
  navigate(){
    this.router.navigate(['./home/']);
  }

  ngOnInit(): void {
    this.isChange = false;
    this.tempData = this.dataService.settData;
  }

  ngOnDestroy() {
    if(this.isChange){
    this.subscription.unsubscribe();
  }
}

}
