import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lat = 51.678418;
  lng = 7.809007;
  selectedChartType = 'column';
  availableColors = [
    'Red',
    'Green',
    'Purple',
    'Yellow',
    'Blue',
    'Grey',
    'Orange',
  ];
  months = ['January', 'February', 'March'];
  graphTypes = [
    { label: 'pie', value: 'pie' },
    { label: 'bar', value: 'column' },
    { label: 'line', value: 'line' },
  ];
  dataPoints = [
    ...this.months.map((month, index) => ({
      name: month,
      y: Number(index + 1),
    })),
  ];
  colorPoints = [...this.months.map(() => ({ color: 'red' }))];
  chart = new Chart({
    chart: {
      type: this.selectedChartType,
    },
    title: {
      text: 'Market Qtr Report',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: this.months,
      title: {
        text: 'Month',
      },
    },
    yAxis: {
      title: {
        text: 'Select Monthly Revenue',
      },
    },
    series: [
      {
        name: '',
        data: [1, 2, 3],
        color: 'red',
      },
    ],
  } as any);

  updatePoint(index, pointValue) {
    this.dataPoints[index] = {
      name: this.months[index],
      y: Number(pointValue),
    };
    this.chart.ref.series[0].setData(this.dataPoints);
  }

  updateColor(color, index) {
    this.colorPoints[index] = { color: color };
    this.chart.ref.series[0].setData(this.colorPoints);
  }

  updateChartType(type) {
    this.chart.ref.update({ chart: { type: type } });
  }

  getCurrentLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((success) => {
        this.lat = success.coords.latitude;
        this.lng = success.coords.longitude;
      });
    }
  }
}
