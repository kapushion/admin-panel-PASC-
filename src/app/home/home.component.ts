import { Component, OnInit } from '@angular/core';
import {EventService } from '../services/event.service';
import {Params, Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any = [];
//  event: Array<any>;

  constructor(
    public eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.eventService.getUsers()
    .subscribe(result => {
      console.log(result);
      result.forEach((item) => {
        console.log(item);
        this.items.push(item);
      }) 
      console.log(this.items);
    
    })
  }
 

}
