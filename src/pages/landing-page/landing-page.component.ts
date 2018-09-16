import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent  {

  constructor() {

  }

  /**
   * Sends click event track to GA.
   * @param eventLabel - Name of the contact medium clicked
   */
  sendEvent(eventLabel: string) {
      (<any>window).ga('send', 'event', {
        eventCategory: 'Social Media',
        eventLabel: eventLabel,
        eventAction: 'click',
        eventValue: 10
      });
  }

}
