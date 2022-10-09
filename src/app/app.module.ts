import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OverviewComponent } from './overview/overview.component';
import { WorkoutOverviewComponent } from './workout-overview/workout-overview.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutRouteGuard } from './activate-route';

@NgModule({
  declarations: [			
    AppComponent,
      OverviewComponent,
      WorkoutOverviewComponent,
      WorkoutDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [WorkoutRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
