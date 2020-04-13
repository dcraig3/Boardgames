import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClueComponent } from './clue/clue.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clue',
    component: ClueComponent,
  },
  {
    path: 'yahtzee',
    component: YahtzeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
