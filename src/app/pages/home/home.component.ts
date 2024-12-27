import { Component, OnDestroy, OnInit } from '@angular/core';
import * as goodScent from "../../../../public/good_scent_raw_material.json";
import * as synthetics from "../../../../public/synthetics_detail_raw_material.json";
import * as listGs from "../../../../public/list_good_scent_raw_material.json";
import { combineLatest, of, Subject, switchAll, switchMap, takeUntil, tap } from 'rxjs';
import { RawMaterial } from '../../interfaces/raw-material.interface';
import { CommonModule } from '@angular/common';
import { FilterDataService } from '../../services/filter-data/filter-data.service';
import { FormulasService } from '../../services/formulas/formulas.service';
import { Formulas } from '../../interfaces/formula.interface';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  goodScentRaw: RawMaterial[] = (goodScent as any).default;
  syntheticsRaw: RawMaterial[] = (synthetics as any).default;
  listGs: RawMaterial[] = (listGs as any).default;
  rawMaterial!: RawMaterial[]
  ganjil!: boolean;
  normalView!: boolean;
  formula!: Formulas;
  constructor(
    private filterService: FilterDataService,
    private formulaService: FormulasService
  ) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.formula = {
      name: 'Name formula',
      detail: []
    }
    this.filter();
    this.rawMaterial = this.goodScentRaw.map((gsr, i) => {
      let gs = this.syntheticsRaw.filter((val, isr) => val.ingredient === gsr.ingredient)[0]
      return {
        ...gsr,
        height: i % 2 === 0
          ? 'long'
          : 'small',
        details: gs.details
      }
    })

    this.ganjil = this.rawMaterial.length % 2 === 0 ? false : true;
  }

  extractAfterColon(text: string): string {
    const parts = text.split(':');
    return parts.length > 1 ? parts[1].trim() : "";
  }

  filter() {
    combineLatest([
      this.filterService.getNote,
      this.filterService.getStrength,
      this.filterService.getType
    ])
      .pipe(
        tap(([note, str, type]) => {
          this.rawMaterial = this.goodScentRaw.map((gsr, i) => {
            let gs = this.syntheticsRaw.filter((val, isr) => val.ingredient === gsr.ingredient)[0]
            return {
              ...gsr,
              height: i % 2 === 0
                ? 'long'
                : 'small',
              details: gs.details
            }
          })

          this.ganjil = this.rawMaterial.length % 2 === 0 ? false : true;
          if (note) {
            this.rawMaterial = this.rawMaterial.filter((data) =>
              data.details?.some(detail => detail.category === 'Volatility' && detail.info === note)
            );
          }

          if (str) {
            this.rawMaterial = this.rawMaterial.filter(data =>
              data.odor_strength?.toLowerCase().includes(str.toLowerCase())
            );
          }

          if (type) {
            const normalizedSearch = type.replace(/\s+/g, '').toLowerCase();
            this.rawMaterial = this.rawMaterial.filter(data =>
              data.filiation?.replace(/\s+/g, '').toLowerCase().includes(normalizedSearch)
            );
          }

          this.rawMaterial = this.rawMaterial.map((data, index) => {
            return {
              ...data,
              height: index % 2 === 0
                ? 'long'
                : 'small'
            }
          })

          this.ganjil = this.rawMaterial.length % 2 === 0 ? true : true;
        }),
        takeUntil(this.destroy)
      )
      .subscribe()
  }

  kecilkan() {
    this.normalView = !this.normalView;
  }

  async addFormula(i: number) {
    await this.formula.detail.push(this.rawMaterial[i]);
    await this.formulaService.updateFormula(this.formula);
  }

}
