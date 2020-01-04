import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.TUTORAILDEFAULT.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {id: 1, name: 'Rickt', url: '../assets/spear02.PNG'};

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
