import {Component, inject, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
@Component({selector:'aveniq-page',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./enterprise-services.html'})
export class PageEnterpriseServices {router=inject(Router);el=inject(ElementRef);}
