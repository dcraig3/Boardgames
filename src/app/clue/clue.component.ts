import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.css']
})
export class ClueComponent implements OnInit {

  constructor() { }

  title = 'clue';
  suspects = [{ name: 'Colonel Mustard', select: true }, { name: 'Professor Plum', select: true },
  { name: 'Mr. Green', select: true }, { name: 'Mrs. Peacock', select: true },
  { name: 'Miss Scarlet', select: true }, { name: 'Mrs. White', select: true }];
  weapons = [{ name: 'Knife', select: true }, { name: 'Candlestick', select: true },
  { name: 'Revolver', select: true }, { name: 'Rope', select: true }, { name: 'Lead pipe', select: true },
  { name: 'Wrench', select: true }];
  rooms = [{ name: 'Hall', select: true }, { name: 'Lounge', select: true },
  { name: 'Dinning Room', select: true }, { name: 'Kitchen', select: true },
  { name: 'Ballroom', select: true }, { name: 'Conservatory', select: true },
  { name: 'Billard Room', select: true }, { name: 'Library', select: true }, { name: 'Study', select: true }];
  nothiding = false;

  ngOnInit() {
  }


  toggle(index, type) {
    if (type === 's') {
      this.suspects[index].select = !this.suspects[index].select;
    } else if (type === 'w') {
      this.weapons[index].select = !this.weapons[index].select;
    } else {
      this.rooms[index].select = !this.rooms[index].select;
    }
  }

  hide() {
    this.nothiding = !this.nothiding;
  }


}
