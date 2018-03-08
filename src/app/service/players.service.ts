import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Players } from '../players'

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    console.log(Players)
    return Promise.resolve(Players);
  }

  private getRequestOptions() {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return { headers };
  }
}
