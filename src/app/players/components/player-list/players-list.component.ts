import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../models/player.model';
import { PlayersService } from '../../services/players.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-players-list',
  template: `
    <section>
      <p>NBA Players List</p>
      <ul>
        <li *ngFor="let player of (players$ | async); index as index">
          <button
            class="btn btn-primary"
            [routerLink]="['/player', index]"
            [class.selected]="index === selectedId">
            {{player.name}}
          </button>
          <span [hidden]="!(index === selectedId)"> <---Your Last Choice! </span>
        </li>
      </ul>
    </section>
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
    .selected {
      color: red;
      transition: width .5s;
    }
    .selected:hover {
      width: 30%;
      text-align: center;
    }
  `]
})
export class PlayersListComponent implements OnInit {
  players$: Observable<Player[]>;
  selectedId: number;
  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.players$ = this.route.paramMap()
    // .switchMap((params: ParamMap) => this.playersService.getPlayers)
    this.players$ = this.playersService.getPlayers();
    // this.route.paramMap.subscribe((param: ParamMap) => console.log(param.keys));
    this.players$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = Number(params.get('id'));
        return this.playersService.getPlayers();
      })
    );
  }
}
