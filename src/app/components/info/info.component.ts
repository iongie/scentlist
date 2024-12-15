import { CommonModule } from '@angular/common';
import { Component, HostListener, input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [
    CommonModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnChanges {
  view!: boolean;
  openView = input<boolean>();
  closeView = output<boolean>();
  closeInfo() {
    this.closeView.emit(false);
    this.view = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openView']) {
      this.view = changes['openView'].currentValue
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.escape();
      return;
    }
  }

  escape() {
    this.closeView.emit(false);
    this.view = false;
  }
}
