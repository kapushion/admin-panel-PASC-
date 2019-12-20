import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router } from '@angular/router';
import{EventService} from  '../services/event.service';

@Component({
  selector: 'app-adminevent',
  templateUrl: './adminevent.component.html',
  styleUrls: ['./adminevent.component.scss']
})
export class AdmineventComponent implements OnInit {
  exampleForm: FormGroup;
  validation_messages = {
    'topic': [
      {type: 'required',message:'topic is required'},
    ],
    'date' : [
      {type: 'required',message:'date is required'}
    ],
    'description': [
      {type: 'required',message:'description is required'}
    ],
    'venue' : [
      {type: 'required',message:'venue is required'}
    ]
  }
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public eventService:EventService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
    topic: ['',Validators.required],
    date: ['',Validators.required],
    description: ['',Validators.required],
    venue: ['',Validators.required]
    });
  }

  resetField() {
    this.exampleForm = this.fb.group({
      topic:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      venue:new FormControl('',Validators.required)
    });

   
  }
  onSubmit(value: any) {
    this.eventService.createUser(value)
    .then(
      res=>{
        this.resetField();
        this.router.navigate(['/events']);
      }
    )
  }
}
