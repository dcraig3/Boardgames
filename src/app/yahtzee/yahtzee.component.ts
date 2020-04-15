import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.css']
})
export class YahtzeeComponent implements OnInit {

  constructor() { }

  diceOne: number;
  diceTwo: number;
  diceThree: number;
  diceFour: number;
  diceFive: number;
  diceSix: number;
  totalBeforeBonus: number;
  bonus: number;
  totalUpper: number;
  threeOfAKind: number;
  fourOfAKind: number;
  fullHouse: number;
  straightSmall: number;
  straightLarge: number;
  yahtzee: number;
  chance: number;
  grandTotal: number;
  yahtzeeBonus: number;

  ngOnInit() {
    this.diceOne = 0;
    this.diceTwo = 0;
    this.diceThree = 0;
    this.diceFour = 0;
    this.diceFive = 0;
    this.diceSix = 0;
    this.totalUpper = 0;
    this.threeOfAKind = 0;
    this.fourOfAKind = 0;
    this.fullHouse = 0;
    this.straightSmall = 0;
    this.straightLarge = 0;
    this.yahtzee = 0;
    this.chance = 0;
    this.grandTotal = 0;
    this.totalBeforeBonus = 0;
    this.bonus = 0;
    this.yahtzeeBonus = 0;
  }

  upperCalc() {
    this.totalBeforeBonus = this.diceOne + this.diceTwo + this.diceThree + this.diceFour + this.diceFive + this.diceSix;
    if (this.totalBeforeBonus > 62) {
      this.bonus = 35;
      this.totalUpper = this.totalBeforeBonus + this.bonus;
    } else {
      this.totalUpper = this.totalBeforeBonus;
    }
  }

  lowerCalc() {
    this.grandTotal = this.totalUpper + this.threeOfAKind + (this.yahtzeeBonus * 100) +
      this.fourOfAKind + this.fullHouse + this.straightSmall + this.straightLarge + this.yahtzee + this.chance;
  }

}
