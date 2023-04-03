import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentHistoryComponent } from './components/equipment-history/equipment-history.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'detail/:id', component: PlayerDetailComponent, data: { breadcrumb: '{{id}}' } },
  { path: 'detail/:id/video', component: VideoComponent, data: { breadcrumb: 'Video' } },
  { path: 'detail/:id/video/history', component: EquipmentHistoryComponent, data: { breadcrumb: 'History' } },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
