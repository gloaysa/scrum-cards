import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCard = -1;

  images = [
    'ultra-easy',
    'very-easy',
    'easy',
    'normal',
    'hard',
    'epic',
    'unknown'
  ];

  selectCard(index: number) {
    this.selectedCard = index;
    window.scroll(0, 0);
  }
}
