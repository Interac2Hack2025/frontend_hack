import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-buttons.component.html',
})
export class ActionButtonsComponent {
  activeButton: number = 0;

  setActive(index: number) {
    this.activeButton = index;
  }
}
