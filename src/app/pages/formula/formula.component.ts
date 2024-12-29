import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Formulas } from '../../interfaces/formula.interface';
import { FormulasService } from '../../services/formulas/formulas.service';

@Component({
  selector: 'app-formula',
  imports: [
    CommonModule
  ],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.css'
})
export class FormulaComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  ganjil!: boolean;
  normalView!: boolean;
  formulas!: Formulas[];
  constructor(
    private formulaService: FormulasService
  ) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.formulaService.get
    .pipe(
      tap(x=>{
        console.log(x);
        
        this.formulas = x;
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

  deleteAction(i: number){
    if (i < 0 || i >= this.formulas.length) {
      return;
    }

    this.formulas[i] = { ...this.formulas[i], deleted:true };
    this.formulaService.delete(this.formulas)
  }

}
