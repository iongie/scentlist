import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, output, ViewChild } from '@angular/core';
import { FilteringDataComponent } from "../filtering-data/filtering-data.component";
import { SearchingDataComponent } from "../searching-data/searching-data.component";
import { InfoComponent } from "../info/info.component";
import { FormulasService } from '../../services/formulas/formulas.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FilteringDataComponent, SearchingDataComponent, InfoComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  viewSearch: boolean = false;
  viewfilter = output<boolean>();
  filteringData!: boolean;
  infoApp!: boolean;
  searchingData!: boolean;
  lengthFormula!:number;
  constructor(
    private formulaService: FormulasService
  ) { }

  ngOnInit(): void {
    this.formulaService.getFormulaBasket
    .pipe(
      tap(x=> {
        this.lengthFormula = x.detail.length
      }),
      takeUntil(this.destroy)
    )
    .subscribe()
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }


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

  onCtrlH() {
    this.infoApp = true;
  }

  onCtrlG() {
    this.filteringData = true;
  }

  openFiltering() {
    this.filteringData = true;
  }

  closeFiltering(event: boolean) {
    this.filteringData = event;
  }

  openInfoApp() {
    this.infoApp = true;
  }

  closeInfoApp(event: boolean) {
    this.infoApp = event;
  }

  openSearching() {
    this.searchingData = true;
  }

  closeSearching(event: boolean) {
    this.searchingData = event;
  }
}
