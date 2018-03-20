import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Player } from '../models/player.model';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-players-list',
  template: `
    <p>NBA Players List</p>
    <ul>
      <li *ngFor="let player of (players$ | async); index as i">
       <button class="btn btn-primary" [routerLink]="['/player', i]">
       {{player.name}}
       </button>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style-type: none;
    }
    button {
      width: 20%;
      text-align: center;
      margin: .2rem;
    }
  `]
})
export class PlayersListComponent implements OnInit {
  players$: Observable<Player[]>;
  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.players$ = this.playersService.getPlayes();
  }

}
