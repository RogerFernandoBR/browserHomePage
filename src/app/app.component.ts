import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './components/card-container/card-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'browserHomePage';
  items: string[] = [];

  constructor() {
    for (let index = 1; index <= 57; index++) {
      this.items.push(index.toString())
    }
  }
}
