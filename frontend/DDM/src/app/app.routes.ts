import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { KarriereComponent } from './karriere/karriere.component';
import { GeschichteComponent } from './geschichte/geschichte.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AgbComponent } from './agb/agb.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { BeratungComponent } from './beratung/beratung.component';
import { EinrichtungComponent } from './einrichtung/einrichtung.component';
import { WartungComponent } from './wartung/wartung.component';


export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'team', component: TeamComponent },
    { path: 'karriere', component: KarriereComponent },
    { path: 'geschichte', component: GeschichteComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'agb', component: AgbComponent },
    { path: 'datenschutz', component: DatenschutzComponent },
    { path: 'beratung', component: BeratungComponent },
    { path: 'einrichtung', component: EinrichtungComponent },
    { path: 'wartung', component: WartungComponent }];

