import { Component, OnInit } from '@angular/core';
import {EventService } from '../services/event.service';
import {Params, Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  items: Array<any>

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
      this.items = result;
    })
  }
  viewDetails(item) {
    this.router.navigate(['/details/' + item.id]);
  }
}
  