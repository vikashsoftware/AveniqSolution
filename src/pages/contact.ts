import {Component, inject, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
@Component({selector:'aveniq-page',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./contact.html'})
export class PageContact {router=inject(Router);el=inject(ElementRef);submitEnquiry(event: Event) { event.preventDefault(); const data=Object.fromEntries(new FormData(event.target as HTMLFormElement).entries()); try {sessionStorage.setItem('aveniqEnquiry',JSON.stringify(data)); this.router.navigateByUrl('/enquiry');} catch {alert('Your browser could not store the enquiry. Please allow session storage and try again.');}}}
