import { Component, OnInit } from '@angular/core';

/*11 - gfgjkfjgkjfkgjf*/
import { Hero } from '../hero';

/*17*/
/*import { HEROES } from '../mock-heroes';*/
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/*export class HeroesComponent implements OnInit {

  /!* 12
  hero = 'Windstorm'; /!*6*!/
  *!/


  /!*13*!/
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


/!*19*!/
/!*  heroes = HEROES;*!/
  heroes: Hero[];

/!*23*!/
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  constructor(private heroService: HeroService) { }

/!*  private getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*!/

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}    -  dead code*/
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}


