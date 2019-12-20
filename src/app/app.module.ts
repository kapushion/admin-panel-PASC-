import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from  '@angular/fire/firestore';
import {environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import{AdmineventComponent } from './adminevent/adminevent.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {EventService} from './services/event.service';
import {AppRoutingModule} from './app-routing/app-routing.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { HomeComponent } from './home/home.component';
import { AdminpComponent } from './adminp/adminp.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AdmineventComponent,
    EventdetailComponent,
    HomeComponent,
    AdminpComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule, FormsModule,BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
 
    
  ],
  providers: [EventService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
