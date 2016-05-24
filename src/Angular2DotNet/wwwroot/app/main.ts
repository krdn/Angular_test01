///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap}    from "angular2/platform/browser";

import {AppComponent} from "./app.component";
import {MasterComponent} from "./masterDetail";
import {TutorialComponent} from "./pages/tutorial";

import {ServiceComponent} from "./service/service.component";

//bootstrap(AppComponent);
//bootstrap(MasterComponent);
//bootstrap(TutorialComponent);
bootstrap(ServiceComponent);