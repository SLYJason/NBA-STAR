import { Injectable } from '@angular/core';

@Injectable()
export class PlayersUrlService {
  baseurl(): string {
    return './assets/json/';
  }
}
