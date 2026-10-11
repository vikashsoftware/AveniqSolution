import {Component, inject, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
@Component({selector:'aveniq-page',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./quality-engineering.html'})
export class PageQualityEngineering {router=inject(Router);el=inject(ElementRef);}
