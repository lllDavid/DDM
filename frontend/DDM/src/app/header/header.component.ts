import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private lastScrollPosition = 0;

  // Navbar hidden wenn gescrollt wird
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    if (currentScrollPosition > this.lastScrollPosition) {
      navbar?.classList.add('hidden');
    } else {
      navbar?.classList.remove('hidden');
    }
    this.lastScrollPosition = currentScrollPosition;
  }

  closeOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      const offcanvas = Offcanvas.getInstance(offcanvasElement) || new Offcanvas(offcanvasElement);
      offcanvas.hide();
    }
    
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }

}
