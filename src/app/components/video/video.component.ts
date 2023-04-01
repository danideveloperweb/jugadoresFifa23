import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  playerId: any;
  saniUrl!: SafeResourceUrl[];

  constructor(private activateRoute: ActivatedRoute,
    private detailService: HomeService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      this.playerId = this.detailService.getEsPlayerDetail(params['id']);
    });
    // this.activateRoute.params.subscribe((params: any) => {
    //   this.saniUrl = this.detailService.getvid(params['id']);
    // })
  }
}

