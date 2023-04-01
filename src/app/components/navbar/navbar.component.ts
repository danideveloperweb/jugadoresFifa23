import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from 'src/app/services/home.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  playerId:any;

  constructor(public navigation: NavigationService,
    public translate: TranslateService,
    public activateRoute: ActivatedRoute,
    private detailService: HomeService) { 
      translate.addLangs(['es', 'en']);
      if(localStorage.getItem("locale")) {
        translate.setDefaultLang(localStorage.getItem("locale") || "[]");
        translate.use(localStorage.getItem("locale") || "[]");
      } else {
        const browserLang = translate.getBrowserLang();
        translate.setDefaultLang(browserLang || "[]");
        translate.use(browserLang?.match(/en|es/) ? browserLang : "en");
        localStorage.setItem("locale", browserLang || "[]");
      }
    }
    switchLanguage(lang: string) {
      this.translate.use(lang);
      this.translate.setDefaultLang(lang);
      localStorage.setItem("locale", lang);
    }
  
    
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:any) => {
      this.playerId = this.detailService.getEsPlayerDetail(params['id']);
    });
  }
}
