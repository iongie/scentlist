import { Component, OnDestroy, OnInit } from '@angular/core';
import { RawMaterial } from '../../interfaces/raw-material.interface';
import * as natural from "../../json/natural_details_raw_material.json";
import * as synthetics from "../../json/synthetics_detail_raw_material.json";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

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
  naturalRaw: RawMaterial[] = (natural as any).default;
  syntheticsRaw: RawMaterial[] = (synthetics as any).default;
  rawMaterial!: RawMaterial[]
  type!: string;
  activeFilter!: string | null;
  ganjil!: boolean;
  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        tap((params) => {
          this.activeFilter = null;
          this.type = params.get('type')!;
          this.rawMaterial = this.type === 'synthetics'
            ? this.syntheticsRaw
            : this.naturalRaw;

          this.rawMaterial = this.rawMaterial.map((data, index) => {
            return {
              ...data,
              height: index % 2 === 0
                ? 'long'
                : 'small'
            }
          })
          this.ganjil = this.rawMaterial.length % 2 === 0 ? false: true;
          console.log(this.type, this.rawMaterial.length / 4, this.rawMaterial.length / 3);
          
        }),
        takeUntil(this.destroy)
      ).subscribe()
  }


  filter(by?: string) {
    this.activeRoute.paramMap
      .pipe(
        tap((params) => {
          this.activeFilter = by! || null;
          this.type = params.get('type')!;
          this.rawMaterial = this.type === 'synthetics'
            ? this.syntheticsRaw
            : this.naturalRaw;

          if (by) {
            this.rawMaterial = this.rawMaterial.filter((data) =>
              data.details.some(detail => detail.category === 'Volatility' && detail.info === by)
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

          this.ganjil = this.rawMaterial.length % 2 === 0 ? true: true;
          console.log(this.type, this.rawMaterial.length / 4, this.rawMaterial.length / 3);
        }),
        takeUntil(this.destroy)
      ).subscribe()
  }

}
