import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Player } from '../models/player.model';

import { PlayersService } from '../service/players.service';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-player-detail',
  template: `
    <h4>{{ (player$ | async).name }} {{ (player$ | async).team }}</h4>
    <p>{{ (player$ | async).description }}</p>
    <p>
      <button class="btn btn-warning" (click)="gotoPlayers($event)">Back</button>
    </p>
  `,
  styles: []
})
export class PlayerDetailComponent implements OnInit {
  player$: Observable<Player>;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private playersService: PlayersService) {}

  ngOnInit() {
    this.player$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.playersService.getPlayer(params.get('id')))
    );

    // Second way to get player info
    // const id = this.route.snapshot.paramMap.get('id');
    // this.player$ = this.playersService.getPlayer(id);
  }
  gotoPlayers(val) {
    this.router.navigate(['/players-list'])
  }

}
