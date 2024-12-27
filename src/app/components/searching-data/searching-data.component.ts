import { CommonModule } from '@angular/common';
import { Component, HostListener, input, output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searching-data',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './searching-data.component.html',
  styleUrl: './searching-data.component.css'
})
export class SearchingDataComponent {
  view!: boolean;
  openView = input<boolean>();
  closeView = output<boolean>();
  textSearch !: string;
  closeInfo() {
    this.closeView.emit(false);
    this.view = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openView']) {
      this.view = changes['openView'].currentValue
    }

    if (changes['textSearch']) {
      console.log(changes['textSearch'].currentValue);
      
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    if (event.key === 'Escape') {
      event.preventDefault();
      this.escape();
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      this.enter();
      return;
    }
  }

  escape() {
    this.closeView.emit(false);
    this.view = false;
  }

  enter(){
    
  }
}
