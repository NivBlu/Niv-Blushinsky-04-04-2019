import { WeatherService } from '../app/weather.service';
import { HomeComponent } from '../app/home/home.component';

export class Weather{
    home:HomeComponent;
    weatherservice:WeatherService;
    description:any;
    coord:any;
    weather:any;
    base:string;
    main:any;
    visibility:number;
    wind:any;
    clouds:any;
    dt:number;
    sys:any;
    id:number;
    name:string;
    cod:number
    isFavorite:boolean=false;
    
    constructor(id , city , weather, des){
        this.id=id;
        this.name=city;
        this.weather=weather;
        this.description=des;
    }

    getWeather():any{
        return this.weather;
    }
    getName():any{
        return this.name;
    }

    getSys():any{
        return this.sys;
    }

    setFavorite():void{
       this.isFavorite=!this.isFavorite;
    }



}

export class WeeklyWeather{
    
city:any;
coord:any;
country:string;
id:any;
message:number;
cnt:number;
list:any;
weather:any;
clouds:any
wind:any;
max_temp:any;
min_temp:any;
speed:number;
deg:number;
sys:any;
pod:any;
dt_txt:string;
date:string;
}