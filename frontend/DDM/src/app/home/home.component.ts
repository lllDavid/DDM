import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MaincontentComponent } from '../maincontent/maincontent.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { NewsComponent } from '../news/news.component';
import { TeamComponent } from '../team/team.component';
import { KarriereComponent } from '../karriere/karriere.component';
import { GeschichteComponent } from '../geschichte/geschichte.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { AgbComponent } from '../agb/agb.component';
import { DatenschutzComponent } from '../datenschutz/datenschutz.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, GeschichteComponent,  DatenschutzComponent, AgbComponent, ImpressumComponent, TeamComponent, KarriereComponent, HeaderComponent, MaincontentComponent, FooterComponent, AboutComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
