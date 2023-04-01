import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  playerId:any;

  constructor(public navigation: NavigationService,
    public route: ActivatedRoute,
    private detailService: HomeService) { }
    
  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.playerId = this.detailService.getEsPlayerDetail(params['id']);
    });
  }
}
