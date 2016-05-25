import { Injectable } from 'angular2/core';

import { Hero } from '../core/domain/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        // Promise 객체
        // 아직 계산되지 않은 값에 대해 수행할 작업을 예약하는 메커니즘을 제공합니다.
        // 비동기 API와의 상호 작용을 관리하기 위한 추상화입니다.
        // https://msdn.microsoft.com/ko-kr/library/dn802826(v=vs.94).aspx

        // https://msdn.microsoft.com/ko-kr/library/dn802825(v=vs.94).aspx
        // getHeroes()함수를 호출하는 곳에서 then으로 받을수 있게함.
        // es6에서 제공됨.
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/