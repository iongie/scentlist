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
    await this.formulas.next(storedLogin! ? JSON.parse(storedLogin) : []);
  }

  async update(formulas: Formulas) {
    const storedLogin = await localStorage.getItem('formulas');
    const parse: Formulas[] = await storedLogin! ? JSON.parse(storedLogin!) : []
    await parse.push(formulas)
    await this.formulas.next(parse)
    await localStorage.setItem('formulas', JSON.stringify(parse))
  }

  async delete(formulas: Formulas[]) {
    await localStorage.setItem('formulas', JSON.stringify(formulas))
  }

  // Fungsi sinkronisasi data JSON
  syncData(online: Formulas[]) {
    
    const storedLogin = localStorage.getItem('formulas');
    const local: Formulas[] = storedLogin! ? JSON.parse(storedLogin!) : []
    const uniqueData = new Set<string>();

    // Gabungkan dan hapus duplikat
    const mergedData = [...local, ...online];
    const filteredData = mergedData.filter(item => !item.deleted);
    console.log(filteredData);
    
    const result = filteredData.filter(item => {
      const key = JSON.stringify(item);
      if (uniqueData.has(key)) {
        return false;
      }
      uniqueData.add(key);
      return true;
    });

    this.formulas.next(result)
    localStorage.setItem('formulas', JSON.stringify(result))
    return result;
  }


  async updateFormula(formula: Formulas) {
    this.formulaBasket.next(formula)
  }
}
