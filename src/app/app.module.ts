import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MydaniFooterModule } from 'mydani-footer';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeService } from './services/home.service';
import { NavigationService } from './services/navigation.service';

import { SafePipe } from './safe.pipe';

import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CardComponent } from './components/card/card.component';
import { EquipmentHistoryComponent } from './components/equipment-history/equipment-history.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { VideoComponent } from './components/video/video.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    CardComponent,
    EquipmentHistoryComponent,
    HomeComponent,
    NavbarComponent,
    PlayerDetailComponent,
    VideoComponent,
    SafePipe,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    MydaniFooterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [HomeService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}