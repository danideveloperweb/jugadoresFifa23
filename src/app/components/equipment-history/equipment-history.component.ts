import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { IEsPlayer } from 'src/app/services/model/esPlayers.interface';


@Component({
  selector: 'app-equipment-history',
  templateUrl: './equipment-history.component.html',
  styleUrls: ['./equipment-history.component.scss']
})
export class EquipmentHistoryComponent implements OnInit {

  history!: IEsPlayer;

  constructor(private activateRoute: ActivatedRoute,
              private detailService: HomeService ) {}

  ngOnInit(): void {
    const playerId = this.activateRoute.snapshot.paramMap.get('id');
    if (playerId) {
      this.history = this.detailService.getEsPlayer().find(player => player.id === playerId)!;
    }
  }
}
