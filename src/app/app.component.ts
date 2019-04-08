import { Component, OnInit } from '@angular/core';
import { Weather } from './myClasses';
import { WeatherService } from './Weather.service';
import { HomeComponent } from '../app/home/home.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';

  weather$: Weather[];
  weather:Weather;
  cityWeather:any;
  city:string;
  country:string;
  aweather:string;
  temp:string;
  



constructor(private weatherservice:WeatherService){}

ngOnInit(){
 return this.weatherservice.getWeather().subscribe(data => this.weather = data);
  
}




}
