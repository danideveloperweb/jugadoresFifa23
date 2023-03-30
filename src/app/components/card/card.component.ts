import { Component, Input } from '@angular/core';
import { IEsPlayer } from 'src/app/services/model/esPlayers.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() esPlayerCard!: IEsPlayer;

}
