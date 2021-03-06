import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.TUTORAILDEFAULT.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {id: 1, name: 'Rickt', url: '../assets/spear02.PNG'};

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
