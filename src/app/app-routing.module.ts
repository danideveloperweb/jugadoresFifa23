import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentHistoryComponent } from './components/equipment-history/equipment-history.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: PlayerDetailComponent },
  { path: 'detail/:id/video', component: VideoComponent },
  { path: 'detail/:id/history', component: EquipmentHistoryComponent },
  { path: '**', pathMatch:'full', redirectTo:'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
