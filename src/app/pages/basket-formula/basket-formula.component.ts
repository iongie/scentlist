import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { Formulas } from '../../interfaces/formula.interface';
import { FormulasService } from '../../services/formulas/formulas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket-formula',
  imports: [CommonModule, FormsModule],
  templateUrl: './basket-formula.component.html',
  styleUrl: './basket-formula.component.css'
})
export class BasketFormulaComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  ganjil!: boolean;
  normalView!: boolean;
  formula!: Formulas;
  constructor(
    private formulaService: FormulasService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.formulaService.getFormulaBasket
    .pipe(
      tap(x=>{
        this.formula = x;
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

  deleteFormula(i: number){
    if (i > -1 && i < this.formula.detail.length) {
      this.formula.detail.splice(i, 1);  // Correct way to delete by index
    } else {
      console.error('Index out of bounds');
    }
  }

  saveFormula(){
    this.formulaService.update(this.formula)
    this.formulaService.updateFormula(
      {
        name: 'no name',
        type: 'no type',
        detail: []
      }
    );
    this.router.navigate(['formula'])
  }

  cancelFormula(){
    this.formulaService.updateFormula(
      {
        name: 'no name',
        type: 'no type',
        detail: []
      }
    )
  }
}
