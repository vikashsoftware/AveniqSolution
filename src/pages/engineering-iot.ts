import {Component, inject, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
@Component({selector:'aveniq-page',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./engineering-iot.html'})
export class PageEngineeringIot {router=inject(Router);el=inject(ElementRef);}
