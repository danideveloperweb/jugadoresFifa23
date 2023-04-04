import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { IEsPlayer } from 'src/app/services/model/esPlayers.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playerHome!: IEsPlayer[];

  constructor(
    private playerHomeService: HomeService,
    private router: Router) { }

  ngOnInit(): void {
    this.playerHome = this.playerHomeService.getEsPlayer();
  }
}
