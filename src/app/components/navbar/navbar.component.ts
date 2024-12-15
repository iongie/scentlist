import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, output, ViewChild } from '@angular/core';
import { FilteringDataComponent } from "../filtering-data/filtering-data.component";
import { SearchingDataComponent } from "../searching-data/searching-data.component";
import { InfoComponent } from "../info/info.component";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FilteringDataComponent, SearchingDataComponent, InfoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  viewSearch: boolean = false;
  viewfilter = output<boolean>();
  filteringData!: boolean;
  infoApp!:boolean;
  searchingData!:boolean;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
      this.onCtrlU();
      return;
    }

    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      this.onCtrlH();
      return;
    }

    

    if (event.ctrlKey && event.key === 'g') {
      event.preventDefault();
      this.onCtrlG();
      return;
    }
  }

  onCtrlU() {
    this.searchingData = true;
  }

  onCtrlH(){
    this.infoApp = true;
  }

  onCtrlG(){
    this.filteringData = true;
  }

  openFiltering(){
    this.filteringData = true;
  }

  closeFiltering(event: boolean){
    this.filteringData = event;
  }

  openInfoApp(){
    this.infoApp = true;
  }

  closeInfoApp(event: boolean){
    this.infoApp = event;
  }

  openSearching(){
    this.searchingData = true;
  }

  closeSearching(event: boolean){
    this.searchingData = event;
  }
}
