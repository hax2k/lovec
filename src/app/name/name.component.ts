import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data, DataService } from '../data.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  name: string;
  constructor( public router:Router, public service:DataService) { }

  ngOnInit(): void {
    this.service.sentName(this.name);

  }

  addName(){
    this.router.navigate(['calc']);
  }
sendName(){
  this.service.sentName(this.name);
}
}
