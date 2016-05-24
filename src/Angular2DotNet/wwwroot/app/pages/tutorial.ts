import { Component } from 'angular2/core';
import { Hero } from '../core/domain/hero';
import { HeroDetailComponent } from './hero-detail.component';
@Component({
    selector: 'tutorial-app',
    //templateUrl: './app/pages/tutorial.html',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
    directives: [HeroDetailComponent],
    styleUrls: ['./app/pages/tutorial.css']
})
export class TutorialComponent {
    title = 'Tutorial - Multiple Components';
    heroes = HEROES;
    selectedHero: Hero;


    onSelect(hero: Hero) { this.selectedHero = hero; }
}
var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];