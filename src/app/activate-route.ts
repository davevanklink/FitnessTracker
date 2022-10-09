import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";

export class WorkoutRouteGuard implements CanActivate {
  canActivate( next: ActivatedRouteSnapshot) {
    const routeParam = next.params['workout'];
    const workoutGroups = [
      'rug',
      'benen',
      'borst',
    ];
    return workoutGroups.some(w => w === routeParam);
  }
}