import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

var firebaseConfig = {
  apiKey: "AIzaSyDEGTjj6QCC5RSVLxrdLV9tg8tkS9fvTeI",
  authDomain: "todolist-c17b7.firebaseapp.com",
  databaseURL: "https://todolist-c17b7.firebaseio.com",
  projectId: "todolist-c17b7",
  storageBucket: "todolist-c17b7.appspot.com",
  messagingSenderId: "1062400707404",
  appId: "1:1062400707404:web:b27e8ef529d03ef485dde9",
  measurementId: "G-8B0WJWC9TB"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
