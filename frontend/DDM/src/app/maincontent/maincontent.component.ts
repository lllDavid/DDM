import { Component } from '@angular/core';
import { ChatfensterComponent } from '../chatfenster/chatfenster.component';
@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [ChatfensterComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
