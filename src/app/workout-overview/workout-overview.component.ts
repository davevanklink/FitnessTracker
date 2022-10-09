import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-overview',
  templateUrl: './workout-overview.component.html',
  styleUrls: ['./workout-overview.component.scss']
})
export class WorkoutOverviewComponent implements OnInit {

  workout = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit() {
    this.workout = this.route.snapshot.params['workout'];
  }

  onNavigateBack() {
    this.router.navigate(['..']);
  }

  onAddWorkout() {
    console.log('onAddWorkout');
  }
}
