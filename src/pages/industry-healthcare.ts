import {Component, inject, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
@Component({selector:'aveniq-page',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./industry-healthcare.html'})
export class PageIndustryHealthcare {router=inject(Router);el=inject(ElementRef);}
