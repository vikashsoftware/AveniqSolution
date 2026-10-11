import {Component, inject, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
@Component({selector:'aveniq-page',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./industry-life-sciences.html'})
export class PageIndustryLifeSciences {router=inject(Router);el=inject(ElementRef);}
