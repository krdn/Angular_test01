"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var mock_heroes_1 = require('./mock-heroes');
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        // Promise 객체
        // 아직 계산되지 않은 값에 대해 수행할 작업을 예약하는 메커니즘을 제공합니다.
        // 비동기 API와의 상호 작용을 관리하기 위한 추상화입니다.
        // https://msdn.microsoft.com/ko-kr/library/dn802826(v=vs.94).aspx
        // https://msdn.microsoft.com/ko-kr/library/dn802825(v=vs.94).aspx
        // getHeroes()함수를 호출하는 곳에서 then으로 받을수 있게함.
        // es6에서 제공됨.
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    // See the "Take it slow" appendix
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    HeroService = __decorate([
        core_1.Injectable()
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero.service.js.map