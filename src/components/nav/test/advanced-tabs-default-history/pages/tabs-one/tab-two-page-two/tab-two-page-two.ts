import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../../..';

@IonicPage({
  segment: 'TabsOneTabTwoPageTwo/userId/:userId/name/:name',
  defaultHistory: ['TabsOneTabTwoPageOne']
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Tabs 1 Tab 2 Page 2</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 1 Tab 2 Page 2
  <div>
  User ID: {{userId}}
  </div>
  <div>
  Name: {{name}}
  </div>
  <button ion-button (click)="goToNext()">Next</button>
</ion-content>
  `
})
export class TabsOneTabTwoPageTwo {
  userId: string;
  name: string;
  constructor(public nav: NavController, navParams: NavParams) {
    this.userId = navParams.data.userId;
    this.name = navParams.data.name;
  }

  goToNext() {
    this.nav.push('TabsOneTabTwoPageThree', { paramOne: 'Nashua', paramTwo: 'NH'});
  }
}
