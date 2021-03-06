import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.events = af.database.list('/event');
  }
  title = 'EventFinda';
}
