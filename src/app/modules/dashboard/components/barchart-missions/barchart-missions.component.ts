import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-barchart-missions',
  templateUrl: './barchart-missions.component.html',
  styleUrls: ['./barchart-missions.component.scss']
})
export class BarchartMissionsComponent implements OnInit {


  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Misiones Completadas Vs Fallidas por mes'
    },
    xAxis: {
      categories: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
      ]
    },
    yAxis: {
      title: {
        text: 'Número de misiones'
      }
    },
    series: [
      {
        name: "Completadas",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Fallidas',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })


  constructor() {

  }
  ngOnInit(): void {

  }

}
