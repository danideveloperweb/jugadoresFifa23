
import { Injectable } from '@angular/core';
import { EsPlayer } from './model/esPlayers';
import { IEsPlayer } from './model/esPlayers.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  esPlayer: IEsPlayer[] = EsPlayer;

  getEsPlayer(): IEsPlayer[] {
    return this.esPlayer;
  }

  getEsPlayerDetail(id: any) {
    return this.esPlayer[id - 1];
  }
}
