import { Injectable } from '@angular/core';
import { EnPlayer } from './model/enPlayers';
import { IEnPlayer } from './model/enPlayers.interface';
import { EsPlayer } from './model/esPlayers';
import { IEsPlayer } from './model/esPlayers.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  esPlayer: IEsPlayer[]= EsPlayer;
  enPlayer: IEnPlayer[]= EnPlayer;

  getEsPlayer(): IEsPlayer[] {
    return this.esPlayer;
  }
  getEnPlayer(): IEnPlayer[] {
    return this.enPlayer;
  }
}
