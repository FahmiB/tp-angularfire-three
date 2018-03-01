import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  users: Observable<any[]>; //<User[]>
  publications: Observable<any[]>; //<publication[]>


  constructor(private db: AngularFireDatabase) {
    //this.users = db.list('users').valueChanges();
  }
  ngOnInit() {

  }
}

