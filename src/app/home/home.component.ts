import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  routerDatabase() {
    this.router.navigate(['database']);
  }

  routeName(){
    this.router.navigate(['name']);
  }
  routerVideo(){
    this.router.navigate(['video']);
  }

}
