import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player.model';

import { PlayersUrlService } from './players-url.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';


@Injectable()
export class PlayersService {
  players;

  constructor(
    private http: HttpClient,
    private playersUrlService: PlayersUrlService) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.playersUrlService.baseurl()}players.json`, this.getRequestOptions());
  }

  getPlayer(id: string): Observable<Player> {
    return this.getPlayers().pipe(
      map(val => val[id])
    );
  }

  private getRequestOptions() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return { headers };
  }
}
