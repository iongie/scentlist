import { CommonModule } from '@angular/common';
import { Component, HostListener, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { FilterDataService } from '../../services/filter-data/filter-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtering-data',
  imports: [
    CommonModule
  ],
  templateUrl: './filtering-data.component.html',
  styleUrl: './filtering-data.component.css'
})
export class FilteringDataComponent implements OnChanges {
  view!: boolean;
  openView = input<boolean>();
  closeView = output<boolean>();
  activeFilterNote!: string;
  activeFilterStrength!: string;
  activeFilterType!: string;

  constructor(
    private filterService: FilterDataService,
    private router: Router
  ) {

  }
  closeFiltering() {
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

  enter() {
    this.filterService.updateNote(this.activeFilterNote);
    this.filterService.updateStrength(this.activeFilterStrength);
    this.filterService.updateType(this.activeFilterType);
    this.closeView.emit(false);
    this.view = false;
  }

  selectNote(by?: string) {
    this.activeFilterNote = by! || undefined!;
  }

  selectStrength(by?: string) {
    this.activeFilterStrength = by! || undefined!;
  }

  selectType(by?: string) {
    this.activeFilterType = by! || undefined!;
  }

  applyFilters() {
    console.log(this.router.url);
    this.router.navigate(['/'])
    setTimeout(() => {
      this.filterService.updateNote(this.activeFilterNote);
      this.filterService.updateStrength(this.activeFilterStrength);
      this.filterService.updateType(this.activeFilterType);
      this.closeView.emit(false);
      this.view = false;
    }, 500);
  }

  resetFilters() {
    this.filterService.updateNote(undefined!);
    this.filterService.updateStrength(undefined!);
    this.filterService.updateType(undefined!);
    this.activeFilterNote = undefined!;
    this.activeFilterStrength = undefined!;
    this.activeFilterType = undefined!;
    this.closeView.emit(false);
    this.view = false;
    this.router.navigate(['/'])
  }
}
