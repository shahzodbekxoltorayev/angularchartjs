import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private  _http:HttpClient) { }

  dailyForecastChicago(){
    return this._http.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly&appid=85e8aa1e4e1f21f163162abfe3feff52")

  }
  dailyForecastTurkey(){
    return this._http.get("https://api.openweathermap.org/data/2.5/onecall?lat=39.1667&lon=35.6667&exclude=hourly&appid=85e8aa1e4e1f21f163162abfe3feff52")

  }
  dailyForecastSamarkand(){
    return this._http.get("https://api.openweathermap.org/data/2.5/onecall?lat=38.000&lon=67.500&exclude=hourly&appid=85e8aa1e4e1f21f163162abfe3feff52")

  }
}
