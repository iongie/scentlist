import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Formulas } from '../../interfaces/formula.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {
  formulas = new BehaviorSubject<Formulas[]>([]);
  formulaBasket = new BehaviorSubject<Formulas>({
    name: 'no name',
    type: 'no type',
    detail: []
  });
  get = this.formulas.asObservable();
  getFormulaBasket = this.formulaBasket.asObservable();
  constructor(
    private cookieStorage: CookieService,
  ) { 
    this.initializecookieStorage();
  }

  private async initializecookieStorage() {
    const storedLogin = await localStorage.getItem('formulas');
    await this.formulas.next(storedLogin! ? JSON.parse(storedLogin): []);
  }

  async update(formulas: Formulas) {
    const storedLogin = await localStorage.getItem('formulas');
    const parse: Formulas[] = await storedLogin! ? JSON.parse(storedLogin!): []
    await parse.push(formulas)
    await this.formulas.next(parse)
    await localStorage.setItem('formulas', JSON.stringify(parse))
  }

  async updateFormula(formula: Formulas) {
    this.formulaBasket.next(formula)
  }
}
