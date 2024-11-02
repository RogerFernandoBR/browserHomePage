import { Component, Input, input } from '@angular/core';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardOptions!: ICard;

  openLink() {
    window.open(this.cardOptions.url, '_blank')
  }
}
