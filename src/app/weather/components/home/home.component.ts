import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/weather/services/data.service'
import { Weather } from 'src/app/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Weather; 
  src: string;
  detail : any;
  unitTemp: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data.userdata; // get data from resolver
    this.detail = this.data.weather[0];
    this.src=`https://openweathermap.org/img/w/${this.detail.icon}.png`
    this.UnitTemp();
  }

  UnitTemp(){
    this.unitTemp = this.dataService.settData.tempUnit.name.charAt(0).toUpperCase()
  }

}
