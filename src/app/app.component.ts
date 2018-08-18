import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  // setting random whilte initializing itself
  heartTop: Number = getRandomInt(100, window.innerHeight - 150);
  heartLeft: Number = getRandomInt(100, window.innerWidth - 150);
  heartColor: String = '#' + Math.floor(Math.random() * 16777215).toString(16);

  ngOnInit() {
    // generates new position and color to heart for evry 3secs.
    setInterval(() => {
      this.heartTop = getRandomInt(100, window.innerHeight - 150);
      this.heartLeft = getRandomInt(100, window.innerWidth - 150);
      this.heartColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 3000);
  }
}

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
