import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  workouts = [
    'rug',
    'benen',
    'borst',
    'schouders',
    'biceps',
    'triceps',
    'buik'
  ];

  item$: Observable<any>;

  constructor(private readonly firestore: Firestore) {
    const col = collection(firestore, 'items');
    this.item$ = collectionData(col);
    this.item$.subscribe(o => console.log(o));
  }

  ngOnInit() {
  }

}
