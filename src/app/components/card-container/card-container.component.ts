import { Component, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ICard } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss'
})
export class CardContainerComponent {
  @Input() cardOptions!: ICard;
}
