import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {



  playerId:any;

  constructor(public navigation: NavigationService,
    private activateRoute: ActivatedRoute,
    private detailService: HomeService) { }
    
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:any) => {
      this.playerId = this.detailService.getEsPlayerDetail(params['id']);
    });
  }
}
