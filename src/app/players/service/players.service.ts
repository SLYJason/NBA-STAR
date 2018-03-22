import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player.model'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Players } from '../../players';

@Injectable()
export class PlayersService {
  players;

  constructor(private http: HttpClient) {
    this.players = Players;
  }

  getPlayers(): Observable<Player[]> {
    return Observable.of(this.players);
  }

  getPlayer(id: string): Observable<Player> {
    return Observable.of(this.players[Number(id)]);
  }

  private getRequestOptions() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return { headers };
  }
}
