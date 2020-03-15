import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/weather/services/data.service'

@Component({
  selector: 'qk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(dataService: DataService) { 
    
  }

  ngOnInit(): void {
  }

}
