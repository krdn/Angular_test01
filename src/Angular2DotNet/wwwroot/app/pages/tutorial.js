"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var hero_detail_component_1 = require('./hero-detail.component');
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = 'Tutorial - Multiple Components';
        this.heroes = HEROES;
    }
    TutorialComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'tutorial-app',
            //templateUrl: './app/pages/tutorial.html',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  ",
            directives: [hero_detail_component_1.HeroDetailComponent],
            styleUrls: ['./app/pages/tutorial.css']
        })
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
var HEROES = [
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
//# sourceMappingURL=tutorial.js.map