import { Component, OnInit } from '@angular/core';
import { Weather } from '../myClasses';
import { WeeklyWeather } from '../myClasses';
import { WeatherService } from '../Weather.service';
import { WeeklyComponent } from '..//weekly/weekly.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  weather: Weather;


  constructor(private weatherservice: WeatherService) { }







  ngOnInit() {
  }





}
