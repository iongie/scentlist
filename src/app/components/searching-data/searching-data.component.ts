import { CommonModule } from '@angular/common';
import { Component, HostListener, input, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-searching-data',
  imports: [
    CommonModule
  ],
  templateUrl: './searching-data.component.html',
  styleUrl: './searching-data.component.css'
})
export class SearchingDataComponent {
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
