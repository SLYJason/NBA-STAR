import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player.model';

import { PlayersUrlService } from './players-url.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class PlayersService {
  players;

  constructor(
    private http: HttpClient,
    private playersUrlService: PlayersUrlService) {
    this.http.get(`${this.playersUrlService.baseurl()}players.json`, this.getRequestOptions()).subscribe(res => this.players = res);
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
