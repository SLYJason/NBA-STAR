import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../models/player.model';
import { PlayersService } from '../../services/players.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-players-list',
  template: `
    <section>
      <h4 class="title">NBA Players List</h4>
      <div class="detail">
        <router-outlet></router-outlet>
      </div>
      <div class="list-group list">
        <a *ngFor="let player of (players$ | async); index as index"
           class="list-group-item list-group-item-action list-item"
           [routerLink]="['player', index]"
           [class.selected]="index === selectedId">
          {{player.name}}
        </a>
      </div>
    </section>
  `,
  styles: [`
    .title {
      text-align: center;
    }
    .list {
      display: flex;
    }
    .list-item {
      display: inline-block;
      width: 30%;
      text-align: center;
      font-weight: bold;
    }
    .detail {
      position: absolute;
      left: 40%;
      width: 50%;
    }
  `]
})
export class PlayersListComponent implements OnInit {
  players$: Observable<Player[]>;
  selectedId: number;
  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.players$ = this.route.paramMap()
    // .switchMap((params: ParamMap) => this.playersService.getPlayers)
    // this.players$ = this.playersService.getPlayers();
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
