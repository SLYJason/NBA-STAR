import { Component, OnInit } from '@angular/core';
import { PlayersService } from './service/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  players;
  constructor(private playerService: PlayersService) {}
  ngOnInit() {
    this.playerService.getPlayers().then(data => this.players = data);
  }
}
