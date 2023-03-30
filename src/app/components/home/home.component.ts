import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { IEsPlayer } from 'src/app/services/model/esPlayers.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playerHome!: IEsPlayer[];

  constructor(private playerHomeService: HomeService){ }

  ngOnInit(): void {
    this.playerHome = this.playerHomeService.getEsPlayer();
  }
}
