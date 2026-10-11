import {Component, inject, AfterViewInit} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withHashLocation, withInMemoryScrolling, RouterOutlet,RouterLink,RouterLinkActive,Router,NavigationEnd} from '@angular/router';
import {PageAbout} from './pages/about';
import {PageAiAutomation} from './pages/ai-automation';
import {PageApplicationSupport} from './pages/application-support';
import {PageBusinessOperations} from './pages/business-operations';
import {PageCloudInfrastructure} from './pages/cloud-infrastructure';
import {PageConsulting} from './pages/consulting';
import {PageContact} from './pages/contact';
import {PageCybersecurity} from './pages/cybersecurity';
import {PageDataAnalytics} from './pages/data-analytics';
import {PageDevopsPlatform} from './pages/devops-platform';
import {PageDigitalExperience} from './pages/digital-experience';
import {PageEngagementModels} from './pages/engagement-models';
import {PageEngineeringIot} from './pages/engineering-iot';
import {PageEnquiry} from './pages/enquiry';
import {PageEnterpriseApplications} from './pages/enterprise-applications';
import {PageEnterpriseServices} from './pages/enterprise-services';
import {PageHardwareAccessories} from './pages/hardware-accessories';
import {PageHardwareDesktops} from './pages/hardware-desktops';
import {PageHardwareLaptops} from './pages/hardware-laptops';
import {PageHardwareLifecycle} from './pages/hardware-lifecycle';
import {PageHardwareNetworking} from './pages/hardware-networking';
import {PageHardwareServers} from './pages/hardware-servers';
import {PageHardware} from './pages/hardware';
import {PageIndex} from './pages/index';
import {PageIndustries} from './pages/industries';
import {PageIndustryAerospace} from './pages/industry-aerospace';
import {PageIndustryAgriculture} from './pages/industry-agriculture';
import {PageIndustryAutomotive} from './pages/industry-automotive';
import {PageIndustryBanking} from './pages/industry-banking';
import {PageIndustryCapitalMarkets} from './pages/industry-capital-markets';
import {PageIndustryConstruction} from './pages/industry-construction';
import {PageIndustryEducation} from './pages/industry-education';
import {PageIndustryEnergy} from './pages/industry-energy';
import {PageIndustryHealthcare} from './pages/industry-healthcare';
import {PageIndustryInsurance} from './pages/industry-insurance';
import {PageIndustryLifeSciences} from './pages/industry-life-sciences';
import {PageIndustryLogistics} from './pages/industry-logistics';
import {PageIndustryManufacturing} from './pages/industry-manufacturing';
import {PageIndustryMedia} from './pages/industry-media';
import {PageIndustryProfessionalServices} from './pages/industry-professional-services';
import {PageIndustryPublicServices} from './pages/industry-public-services';
import {PageIndustryRetail} from './pages/industry-retail';
import {PageIndustryTechnology} from './pages/industry-technology';
import {PageIndustryTelecom} from './pages/industry-telecom';
import {PageIndustryTravel} from './pages/industry-travel';
import {PageManagedIt} from './pages/managed-it';
import {PagePrivacy} from './pages/privacy';
import {PageQualityEngineering} from './pages/quality-engineering';
import {PageServiceDirectory} from './pages/service-directory';
import {PageServices} from './pages/services';
import {PageSoftwareDevelopment} from './pages/software-development';
import {PageSoftwareServices} from './pages/software-services';
import {PageTechnologySolutions} from './pages/technology-solutions';
@Component({selector:'aveniq-header',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./header.html'})
class Header { }
@Component({selector:'aveniq-footer',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./footer.html'})
class Footer { year=new Date().getFullYear(); }
@Component({selector:'aveniq-app',standalone:true,imports:[Header,Footer,RouterOutlet],template:'<aveniq-header/><router-outlet/><aveniq-footer/>'})
class App implements AfterViewInit {
router=inject(Router);
constructor(){this.router.events.subscribe(e=>{if(e instanceof NavigationEnd)document.querySelectorAll<HTMLDetailsElement>('.service-menu').forEach(m=>m.open=false);});}
ngAfterViewInit(){for(const file of ['menu.js','chat.js']){const s=document.createElement('script');s.src=file;document.body.append(s);}}
}
bootstrapApplication(App,{providers:[provideRouter([
{path:"about",component:PageAbout,title:"About Us | Aveniq"},
{path:"ai-automation",component:PageAiAutomation,title:"AI & process automation | Aveniq"},
{path:"application-support",component:PageApplicationSupport,title:"Application support | Aveniq"},
{path:"business-operations",component:PageBusinessOperations,title:"Business operations & process services | Aveniq"},
{path:"cloud-infrastructure",component:PageCloudInfrastructure,title:"Cloud & infrastructure | Aveniq"},
{path:"consulting",component:PageConsulting,title:"Business & technology consulting | Aveniq"},
{path:"contact",component:PageContact,title:"Contact Us | Aveniq"},
{path:"cybersecurity",component:PageCybersecurity,title:"Cybersecurity & resilience | Aveniq"},
{path:"data-analytics",component:PageDataAnalytics,title:"Data engineering & analytics | Aveniq"},
{path:"devops-platform",component:PageDevopsPlatform,title:"DevOps & platform engineering | Aveniq"},
{path:"digital-experience",component:PageDigitalExperience,title:"Digital experience & commerce | Aveniq"},
{path:"engagement-models",component:PageEngagementModels,title:"Engagement models | Aveniq"},
{path:"engineering-iot",component:PageEngineeringIot,title:"Engineering & connected systems | Aveniq"},
{path:"enquiry",component:PageEnquiry,title:"Enquiry review | Aveniq"},
{path:"enterprise-applications",component:PageEnterpriseApplications,title:"Enterprise applications | Aveniq"},
{path:"enterprise-services",component:PageEnterpriseServices,title:"Enterprise services | Aveniq"},
{path:"hardware-accessories",component:PageHardwareAccessories,title:"Monitors & workplace accessories | Aveniq"},
{path:"hardware-desktops",component:PageHardwareDesktops,title:"Desktops & workstations | Aveniq"},
{path:"hardware-laptops",component:PageHardwareLaptops,title:"Laptops & mobile workstations | Aveniq"},
{path:"hardware-lifecycle",component:PageHardwareLifecycle,title:"Hardware deployment & lifecycle | Aveniq"},
{path:"hardware-networking",component:PageHardwareNetworking,title:"Networking & power | Aveniq"},
{path:"hardware-servers",component:PageHardwareServers,title:"Servers & storage | Aveniq"},
{path:"hardware",component:PageHardware,title:"Hardware & workplace supply | Aveniq"},
{path:"",component:PageIndex,title:"Home | Aveniq"},
{path:"industries",component:PageIndustries,title:"Industries | Aveniq"},
{path:"industry-aerospace",component:PageIndustryAerospace,title:"Aerospace & defense | Aveniq"},
{path:"industry-agriculture",component:PageIndustryAgriculture,title:"Agriculture & food systems | Aveniq"},
{path:"industry-automotive",component:PageIndustryAutomotive,title:"Automotive & mobility | Aveniq"},
{path:"industry-banking",component:PageIndustryBanking,title:"Banking & payments | Aveniq"},
{path:"industry-capital-markets",component:PageIndustryCapitalMarkets,title:"Capital markets | Aveniq"},
{path:"industry-construction",component:PageIndustryConstruction,title:"Construction & real estate | Aveniq"},
{path:"industry-education",component:PageIndustryEducation,title:"Education & learning | Aveniq"},
{path:"industry-energy",component:PageIndustryEnergy,title:"Energy, utilities & resources | Aveniq"},
{path:"industry-healthcare",component:PageIndustryHealthcare,title:"Healthcare | Aveniq"},
{path:"industry-insurance",component:PageIndustryInsurance,title:"Insurance | Aveniq"},
{path:"industry-life-sciences",component:PageIndustryLifeSciences,title:"Life sciences | Aveniq"},
{path:"industry-logistics",component:PageIndustryLogistics,title:"Transportation & logistics | Aveniq"},
{path:"industry-manufacturing",component:PageIndustryManufacturing,title:"Manufacturing | Aveniq"},
{path:"industry-media",component:PageIndustryMedia,title:"Media, entertainment & information services | Aveniq"},
{path:"industry-professional-services",component:PageIndustryProfessionalServices,title:"Professional & business services | Aveniq"},
{path:"industry-public-services",component:PageIndustryPublicServices,title:"Public services & government | Aveniq"},
{path:"industry-retail",component:PageIndustryRetail,title:"Retail & consumer goods | Aveniq"},
{path:"industry-technology",component:PageIndustryTechnology,title:"Technology & software | Aveniq"},
{path:"industry-telecom",component:PageIndustryTelecom,title:"Telecommunications | Aveniq"},
{path:"industry-travel",component:PageIndustryTravel,title:"Travel & hospitality | Aveniq"},
{path:"managed-it",component:PageManagedIt,title:"Managed IT & workplace services | Aveniq"},
{path:"privacy",component:PagePrivacy,title:"Privacy & enquiries | Aveniq"},
{path:"quality-engineering",component:PageQualityEngineering,title:"Quality engineering & testing | Aveniq"},
{path:"service-directory",component:PageServiceDirectory,title:"Service directory | Aveniq"},
{path:"services",component:PageServices,title:"Services | Aveniq"},
{path:"software-development",component:PageSoftwareDevelopment,title:"Software development | Aveniq"},
{path:"software-services",component:PageSoftwareServices,title:"Software services | Aveniq"},
{path:"technology-solutions",component:PageTechnologySolutions,title:"Technology solutions | Aveniq"},{path:'**',redirectTo:''}],withHashLocation(),withInMemoryScrolling({scrollPositionRestoration:'top',anchorScrolling:'enabled'}))]}).catch(console.error);
