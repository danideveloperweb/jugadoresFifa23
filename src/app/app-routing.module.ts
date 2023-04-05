import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentHistoryComponent } from './components/equipment-history/equipment-history.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { VideoComponent } from './components/video/video.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
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
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
