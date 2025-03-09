import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-nav.component.html',
})
export class FooterNavComponent {
  activeButton: number = 0;

  setActive(index: number) {
    this.activeButton = index;
  }
}
