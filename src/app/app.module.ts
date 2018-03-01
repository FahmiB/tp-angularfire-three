import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config = {
  apiKey: "AIzaSyBOJBSM7cVhmAMDAGaiK2kACYym17enoos",
  authDomain: "tp-angularfire-three.firebaseapp.com",
  databaseURL: "https://tp-angularfire-three.firebaseio.com",
  projectId: "tp-angularfire-three",
  storageBucket: "tp-angularfire-three.appspot.com",
  messagingSenderId: "284929958082"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
