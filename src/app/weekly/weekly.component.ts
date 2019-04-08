import { Component, OnInit } from '@angular/core';
import { Weather } from '../myClasses';
import { WeeklyWeather } from '../myClasses';
import { WeatherService } from '../Weather.service';
import { HomeComponent } from '../home/home.component';




@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  home: HomeComponent;
  day: any;
  city: string;
  humidity: number;
  weekday: any;




  constructor(private weatherservice: WeatherService) {


  }



  ngOnInit() {

  }




}
