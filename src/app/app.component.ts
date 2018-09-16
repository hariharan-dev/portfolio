import { Component, OnInit} from '@angular/core';

export class Heart {
  top: number;
  left: number;
  color: string;
  // dynamic animation duration for each heart
  duration: number;

  constructor() {
    this.top = getRandomInt(50, window.innerHeight - 120);
    this.left = getRandomInt(50, window.innerWidth - 120);
    this.color = 'red';
    // this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.duration = Math.floor(Math.random() * 6000) + 3000;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hearts: Heart[] = [
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart(),
    new Heart()
  ];

  ngOnInit() {
    // starting animation after 1sec so that all hearts are initiated
    setTimeout(() => {
      this.hearts.forEach((heart, index) => {
        // javascriptly setting dynamic animation duration for each heart
        document.getElementById('heart-' + index).style.animationDuration =
          (heart.duration / 1000).toString() + 's';

        // setting each heart`s own animation duration as interval to sync with their animation
        setInterval(() => {
          // generates new position and color to heart.
          // stopping animation when tab is not active
          if (!document.hidden) {
            // desktop and up
            if (window.innerWidth >= 992) {
              heart.top = getRandomInt(0, window.innerHeight - 120);
              heart.left = getRandomInt(0, window.innerWidth - 120);
            } else {
              // mobile and tab
              heart.top = getRandomInt(0, window.innerHeight - 80);
              heart.left = getRandomInt(0, window.innerWidth - 80);
            }
          }
        }, heart.duration);
      });
    }, 1000);
  }
}

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
