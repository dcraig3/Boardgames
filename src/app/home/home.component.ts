import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  games = [
    {
      name: 'Clue',
      image: 'Clue.png',
      link: 'clue'
    },
    {
      name: 'Yahtzee',
      image: 'Yahtzee.jpg',
      link: 'yahtzee'
    },
  ];

  ngOnInit() {
  }

  route(link) {
    this.router.navigate([link]);
  }

}
