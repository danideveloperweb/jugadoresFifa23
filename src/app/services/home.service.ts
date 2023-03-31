
import { Injectable } from '@angular/core';
// import { EnPlayer } from './model/enPlayers';
// import { IEnPlayer } from './model/enPlayers.interface';
import { EsPlayer } from './model/esPlayers';
import { IEsPlayer } from './model/esPlayers.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  esPlayer: IEsPlayer[] = EsPlayer;
  // enPlayer: IEnPlayer[] = EnPlayer;
  video!: IEsPlayer;
  sanitazedUrl: SafeResourceUrl[] = [];
  constructor(private _sanitazer: DomSanitizer) {
  }
  getEsPlayer(): IEsPlayer[] {
    return this.esPlayer;
  }
  // getEnPlayer(): IEnPlayer[] {
  //   return this.enPlayer;
  // }
  getEsPlayerDetail(id: any) {
    return this.esPlayer[id - 1];
  }
  // getEsPlayerById(id: string) {
  //   return this.esPlayer.find(player => player.id === "id");
  // }
  getvid(id: any) {
    const player = this.getEsPlayerDetail(id);
    player.vid.forEach(element => {
      this.sanitazedUrl.push(this._sanitazer.bypassSecurityTrustResourceUrl(element))
    });return this.sanitazedUrl;
  }
}
