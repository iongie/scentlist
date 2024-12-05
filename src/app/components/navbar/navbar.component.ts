import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  viewSearch: boolean = false;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.onCtrlK();
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.escape();
      return;
    }
  }

  onCtrlK() {
    console.log('Ctrl + K pressed!');
    this.viewSearch = true;
  }

  escape() {
    console.log('esc pressed!');
    this.viewSearch = false;
  }
}
