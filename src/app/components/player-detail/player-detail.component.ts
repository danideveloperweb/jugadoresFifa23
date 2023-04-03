import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  playerId: any;

  constructor(private activateRoute: ActivatedRoute,
    private detailService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      this.playerId = this.detailService.getEsPlayerDetail(params['id']);
    });
  }
}
