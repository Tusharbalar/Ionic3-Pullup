import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    drawerOptions: any;

    constructor(public navCtrl: NavController) {

        this.drawerOptions = {
            handleHeight: 50,
            thresholdFromBottom: 50,
            thresholdFromTop: 200,
            bounceBack: true,
            showTitle: "New"
        };

    }

  chartOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
}

}
