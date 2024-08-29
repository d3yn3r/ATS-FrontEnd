import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {

  chart = new Chart({
    colors: ['#01BAF2', '#f6fa4b', '#FAA74B', '#baf201', '#f201ba'],
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Misiones 2024'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ]
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.0f}%'
        },
        showInLegend: true
      }
    },
    series: [
     {
      name:'Porcentaje',
      type: 'pie',
      data: [
        {
          name: 'Completadas',
          y: 41,
          color: '#044342',
        },
        {
          name: 'Fallidas',
          y: 33,
          color: '#7e0505',
        },
        {
          name: 'Canceladas',
          y: 6,
          color: '#1821cc',
        },
        {
          name: 'Comprometidas',
          y: 15,
          color: '#ccae18',
        },
        {
          name: 'Retrasadas',
          y: 5,
          color: '#6920fb',
        }

      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}