import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Player } from '../models/player.model';

import { PlayersService } from '../service/players.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-player-detail',
  template: `
    <p>
      player-detail works!
    </p>
  `,
  styles: []
})
export class PlayerDetailComponent implements OnInit {
  player$: Observable<Player>;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private playersService: PlayersService) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.playersService.getPlayer(params.get('id')))
    .subscribe(val => console.log(val));
  }

}
