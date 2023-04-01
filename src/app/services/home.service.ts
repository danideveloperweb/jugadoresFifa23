
import { Injectable } from '@angular/core';
import { EsPlayer } from './model/esPlayers';
import { IEsPlayer } from './model/esPlayers.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  esPlayer: IEsPlayer[] = EsPlayer;
  // video!: IEsPlayer;
  // sanitazedUrl: SafeResourceUrl[] = [];
  // constructor(private _sanitazer: DomSanitizer) {
  // }
  getEsPlayer(): IEsPlayer[] {
    return this.esPlayer;
  }

  getEsPlayerDetail(id: any) {
    return this.esPlayer[id - 1];
  }


  // getvid(id: any) {
  //   const player = this.getEsPlayerDetail(id);
  //   player.vid.forEach(element => {
  //     this.sanitazedUrl.push(this._sanitazer.bypassSecurityTrustResourceUrl(element))
  //   });return this.sanitazedUrl;
  // }
}
