import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmineventComponent} from '../adminevent/adminevent.component';
import {EventsComponent } from '../events/events.component';
import{Routes,RouterModule} from '@angular/router';
import {EventdetailComponent} from '../eventdetail/eventdetail.component'
import {HomeComponent} from '../home/home.component';
import {AdminpComponent} from '../adminp/adminp.component';


export const routes:Routes =[
 {path:'', redirectTo:'/admin', pathMatch:'full'},
 {path:'events', component:EventsComponent},
 {path:'adminevents',component:AdmineventComponent},
 {path: 'details/:id',component:EventdetailComponent},
 {path: 'home',component: HomeComponent},
 {path: 'admin', component:AdminpComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
