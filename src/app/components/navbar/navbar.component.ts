import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, output, ViewChild } from '@angular/core';
import { FilteringDataComponent } from "../filtering-data/filtering-data.component";
import { SearchingDataComponent } from "../searching-data/searching-data.component";
import { InfoComponent } from "../info/info.component";
import { FormulasService } from '../../services/formulas/formulas.service';
import { combineLatest, of, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CallApiService } from '../../services/call-api/call-api.service';

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
  statusMenu: boolean = false;
  constructor(
    private formulaService: FormulasService,
    private callApiService: CallApiService,
    private router: Router
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
    this.statusMenu = false
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
    this.statusMenu = false
  }

  closeFiltering(event: boolean) {
    this.filteringData = event;
  }

  openInfoApp() {
    this.infoApp = true;
    this.statusMenu = false
  }

  closeInfoApp(event: boolean) {
    this.infoApp = event;
  }

  openSearching() {
    this.searchingData = true;
    this.statusMenu = false
  }

  closeSearching(event: boolean) {
    this.searchingData = event;
  }

  openMenu(){
    this.statusMenu = !this.statusMenu;
    console.log(this.statusMenu);
  }

  gotoHome(){
    this.router.navigate(['/']);
    this.statusMenu = false
  }

  gottoBasket(){
    this.router.navigate(['basket-formula']);
    this.statusMenu = false
  }

  gottoFormula(){
    this.router.navigate(['formula']);
    this.statusMenu = false
  }

  syncAction(){
    this.callApiService.read()
    .pipe(
      switchMap((x:any)=>{
        return of(this.formulaService.syncData(x.formula))
      }),
      switchMap((x)=> this.callApiService.update(x)),
      tap(val=> console.log(val)),
      takeUntil(this.destroy)
    ).subscribe()
  }
}
