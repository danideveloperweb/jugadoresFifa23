import { Component, Input } from '@angular/core';
import { IEsPlayer } from 'src/app/services/model/esPlayers.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() esPlayerCard!: IEsPlayer;

  @Input() cardIndex!: number;

  hover: boolean = false;

  getCardHoverStyle() {
    const styles = [
      'translateY(50%) translateX(50%) scale(1.1)',
      'translateY(50%) translateX(-50%) scale(1.1)',
      'translateY(-50%) translateX(50%) scale(1.1)',
      'translateY(-50%) translateX(-50%) scale(1.1)',
    ];

    return styles[this.cardIndex % styles.length];
  }
}
