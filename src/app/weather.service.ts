import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './myClasses';
import { WeeklyWeather } from './myClasses';
import { WeeklyComponent } from './weekly/weekly.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: Weather;
  Home: HomeComponent;
  flag: boolean;
  month: any;
  humidity: any;
  date1: string;
  date2: string;
  date3: string;
  date4: string;
  date5: string;
  Day1maxTemp: number;
  Day1minTemp: number;
  Day2maxTemp: number;
  Day2minTemp: number;
  Day3maxTemp: number;
  Day3minTemp: number;
  Day4maxTemp: number;
  Day4minTemp: number;
  Day5maxTemp: number;
  Day5minTemp: number;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  apiKey = 'cc7b06ceeb8a9f95e7b69e26f0876d4e';
  city: string;
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weeklyUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  coordsUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  lat: any;
  lon: any;
  favorites: Weather[];

  constructor(private http: HttpClient) {
    this.favorites = new Array();
    this.city = 'Tel Aviv';
    this.flag = false;
  }


  getWeather() {
    return this.http.get<Weather>(this.url + this.city + '&appid=cc7b06ceeb8a9f95e7b69e26f0876d4e&units=metric');
  }

  getWeekWeather() {
    return this.http.get<WeeklyWeather>('https://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=cc7b06ceeb8a9f95e7b69e26f0876d4e&units=metric');
  }

  getLocationWeather() {

    return this.http.get<Weather>(this.coordsUrl + 'lat=' + this.lat + '&lon=' + this.lon + '&appid=cc7b06ceeb8a9f95e7b69e26f0876d4e&units=metric');
  }

  setDays() {

    this.setDay1();
    this.setDay2();
    this.setDay3();
    this.setDay4();
    this.setDay5();

  }


  notFavorite() {
    if (this.favorites.length == 1) {
      this.favorites.pop();
      this.flag = false;
    }
    else {
      this.favorites.pop();
    }
  }

  setDay1() {
    var day;
    var month;
    var year;
    year = this.date1.slice(0, 4);
    this.month = this.date1.slice(5, 7);
    day = this.date1.slice(8, 10);
    this.setMonth();
    this.date1 = (day + " " + this.month);
  }
  setDay2() {
    var day;
    var month;
    var year;
    year = this.date2.slice(0, 4);
    this.month = this.date2.slice(5, 7);
    day = this.date2.slice(8, 10);
    this.setMonth();
    this.date2 = (day + " " + this.month);
  }
  setDay3() {
    var day;
    var month;
    var year; 
    year = this.date3.slice(0, 4);
    this.month = this.date3.slice(5, 7);
    day = this.date3.slice(8, 10);
    this.setMonth();
    this.date3 = (day + " " + this.month);
  }
  setDay4() {
    var day;
    var month;
    var year;
    year = this.date4.slice(0, 4);
    this.month = this.date4.slice(5, 7);
    day = this.date4.slice(8, 10);
    this.setMonth();
    this.date4 = (day + " " + this.month);
  }
  setDay5() {
    var day;
    var month;
    var year;
    year = this.date5.slice(0, 4);
    this.month = this.date5.slice(5, 7);
    day = this.date5.slice(8, 10);
    this.setMonth();
    this.date5 = (day + " " + this.month);
  }



  setMonth() {
    switch (this.month) {
      case '01':
        this.month = "January";
        break;
      case '02':
        this.month = "Fabruary";
        break;
      case '03':
        this.month = "March";
        break;
      case '04':
        this.month = "April";
        break;
      case '05':
        this.month = "May";
        break;
      case '06':
        this.month = "June";
        break;
      case '07':
        this.month = "July";
        break;
      case '08':
        this.month = "August";
        break;
      case '09':
        this.month = "September";
        break;
      case '10':
        this.month = "October";
        break;
      case '11':
        this.month = "November";
        break;
      case '12':
        this.month = "December";
        break;
    }
  }

}







