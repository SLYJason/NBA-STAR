import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Player } from '../../models/player.model';

import { PlayersService } from '../../services/players.service';
import { slideInDownAnimation } from '../../../animation';

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
  styles: [],
  animations: [ slideInDownAnimation ]
})
export class PlayerDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  player$: Observable<Player>;
  playerId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playersService: PlayersService) {}

  ngOnInit() {
    this.player$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.playerId = params.get('id');
        return this.playersService.getPlayer(this.playerId);
      })
    );

    // Second way to get player info
    // const id = this.route.snapshot.paramMap.get('id');
    // this.player$ = this.playersService.getPlayer(id);
  }
  gotoPlayers(player) {
    const playerId = player ? player.id : null;
    this.router.navigate(['./players-list', { id: this.playerId}], { relativeTo: this.route });
  }

}
