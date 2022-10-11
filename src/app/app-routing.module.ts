import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutRouteGuard } from './activate-route';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutOverviewComponent } from './workout-overview/workout-overview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', title: 'Overzicht', component: OverviewComponent },
  { path: ':workout', title: 'Test', component: WorkoutOverviewComponent, canActivate: [WorkoutRouteGuard] },
  { path: ':workout/:id', title: 'Detail', component: WorkoutDetailComponent },
  { path: 'settings', title: 'Instellingen', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
