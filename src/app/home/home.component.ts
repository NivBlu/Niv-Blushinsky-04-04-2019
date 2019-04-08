import { Component, OnInit } from '@angular/core';
import { Weather } from '../myClasses';
import { WeeklyWeather } from '../myClasses';
import { WeatherService } from '../Weather.service';
import { WeeklyComponent } from '..//weekly/weekly.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  id: any;
  weekly: WeeklyComponent;
  weather: any;
  city: any;
  country: any;
  minTemp: any;
  maxTemp: any;
  temp: any;
  description: any;
  true: boolean;
  lat: any;
  lon: any;
  humidity: any;



  constructor(private weatherservice: WeatherService) {

    if (navigator) {
      navigator.geolocation.getCurrentPosition(data => {
        this.lat = +data.coords.latitude;
        this.lon = +data.coords.longitude;
        this.weatherservice.lat = this.lat;
        this.weatherservice.lon = this.lon;
        this.getPositionWeather();

      });

    }


  }

  ngOnInit() {


  }

  getWeather() {
    this.weatherservice.city = this.city;
    this.weatherservice.getWeather().subscribe(data => {
      this.weather = data;
      this.description = data.weather[0].description;
      this.country = data.sys.country;
      this.id = data.id;
      this.minTemp = Math.floor(data.main.temp_min);
      this.maxTemp = Math.floor(data.main.temp_max);

    });

    this.getWeeklyWeather();

  }


  setFavorite() {
    for (let i = 0; i < this.weatherservice.favorites.length; i++) {
      if (this.weatherservice.favorites[i].getName() == this.city) {
        alert("This city is already in your favorites!");
        return;
      }
    }
    this.weatherservice.favorites.push(new Weather(this.id, this.city, this.maxTemp, this.description));
    this.weatherservice.flag = true;
  }


  getPositionWeather() {

    this.weatherservice.getLocationWeather().subscribe(data => {
      this.weather = data;
      this.city = data.name;
      this.weatherservice.city = data.name;
      this.description = data.weather[0].description;
      this.country = data.sys.country;
      this.minTemp = Math.floor(data.main.temp_min);
      this.maxTemp = Math.floor(data.main.temp_max);
      this.getWeeklyWeather();

    });

  }


  getWeeklyWeather() {
    this.weatherservice.city = this.city;
    this.weatherservice.getWeekWeather().subscribe(data => {
      this.weatherservice.date1 = data.list[5].dt_txt;
      this.weatherservice.date2 = data.list[13].dt_txt;
      this.weatherservice.date3 = data.list[20].dt_txt;
      this.weatherservice.date4 = data.list[30].dt_txt;
      this.weatherservice.date5 = data.list[39].dt_txt;
      this.weatherservice.setDays();
      this.weatherservice.description1 = data.list[5].weather[0].description;
      this.weatherservice.description2 = data.list[13].weather[0].description;
      this.weatherservice.description3 = data.list[20].weather[0].description;
      this.weatherservice.description4 = data.list[30].weather[0].description;
      this.weatherservice.description5 = data.list[39].weather[0].description;
      this.weatherservice.Day1minTemp = Math.floor(data.list[0].main.temp_min);
      this.weatherservice.Day1maxTemp = Math.floor(data.list[7].main.temp_max);
      this.weatherservice.Day2minTemp = Math.floor(data.list[10].main.temp_min);
      this.weatherservice.Day2maxTemp = Math.floor(data.list[15].main.temp_max);
      this.weatherservice.Day3minTemp = Math.floor(data.list[20].main.temp_min);
      this.weatherservice.Day3maxTemp = Math.floor(data.list[25].main.temp_max);
      this.weatherservice.Day4minTemp = Math.floor(data.list[27].main.temp_min);
      this.weatherservice.Day4maxTemp = Math.floor(data.list[32].main.temp_max);
      this.weatherservice.Day5minTemp = Math.floor(data.list[36].main.temp_min);
      this.weatherservice.Day5maxTemp = Math.floor(data.list[39].main.temp_max);


    });
  }


}

