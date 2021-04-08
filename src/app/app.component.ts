import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartOptions, ChartDataSets } from 'chart.js';
import { WeatherService } from './weather.service';
import { Color, Label } from 'ng2-charts';
import 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lineChartData: ChartDataSets[] = [
  ];

  lineChartLabels: Label[] = [ ];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
 
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

    constructor(private _weather:WeatherService){

  }
  ngOnInit(){
    this.getChicagoData()
    this.getTurkeyData()
    this.getSamarkandData()
  }

  getChicagoData(){
    this._weather.dailyForecastChicago()
    .subscribe((res: any) =>{
      let daily = res.daily;
      let LABELS = []
      let data = []
      for(let i=0;i<daily.length;i++){
        LABELS.push( (new Date(daily[i].dt * 1000)).toJSON().slice(0,10) )
        data.push( daily[i].temp.night )
      } 
        this.lineChartData[0] = {
          data: data,
          label: res.timezone,
          borderColor: "red",
          fill: false
        };
        this.lineChartLabels = LABELS
    })
  }
  getTurkeyData(){
    this._weather.dailyForecastTurkey()
    .subscribe((res: any) =>{
      let daily = res.daily;
      let LABELS = []
      let data = []
      for(let i=0;i<daily.length;i++){
        LABELS.push( (new Date(daily[i].dt * 1000)).toJSON().slice(0,10) )
        data.push( daily[i].temp.night )
      } 
        this.lineChartData[1] = {
          data: data,
          label: res.timezone,
          borderColor: "green",
          fill: false
        };
        this.lineChartLabels = LABELS
    })
  }
  getSamarkandData(){
    this._weather.dailyForecastSamarkand()
    .subscribe((res: any) =>{
      let daily = res.daily;
      let LABELS = []
      let data = []
      for(let i=0;i<daily.length;i++){
        LABELS.push( (new Date(daily[i].dt * 1000)).toJSON().slice(0,10) )
        data.push( daily[i].temp.night )
      } 
        this.lineChartData[2] = {
          data: data,
          label: res.timezone,
          borderColor: "blue",
          fill: false
        };
        this.lineChartLabels = LABELS
    })
  }
}
