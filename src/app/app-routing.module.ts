import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentHistoryComponent } from './components/equipment-history/equipment-history.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  {
    path: 'home',
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        component: HomeComponent,
      },
      {
        path: 'detail/:id',
        data: { breadcrumb: '{{id}}' },
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            component: PlayerDetailComponent,
          },
          {
            path: 'video',
            data: { breadcrumb: 'Video' },
            children: [
              {
                path: '',
                data: { breadcrumb: null },
                component: VideoComponent,
              },
              {
                path: 'history',
                component: EquipmentHistoryComponent,
                data: { breadcrumb: 'History' },
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
