import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player.model'

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    console.log(Player)
    return Promise.resolve(Player);
  }

  private getRequestOptions() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return { headers };
  }
}
