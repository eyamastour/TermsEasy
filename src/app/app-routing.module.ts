import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';

import { PlatformDetailComponent } from './pages/platform-detail/platform-detail.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'platforms', component: PlatformsComponent },
  { path: 'platforms/comparison', component: ComparisonComponent },
  { path: 'platforms/:id', component: PlatformDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
