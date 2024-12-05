import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, tap, takeUntil, delay } from 'rxjs';
import { MainMenu, defMainMenu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-bottom-navigation',
  imports: [CommonModule],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.css'
})
export class BottomNavigationComponent implements OnInit, OnDestroy {
  viewMenu: MainMenu[] = defMainMenu;
  private destroy: Subject<void> = new Subject<void>();
  types!: string;
  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.view();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  view() {
    setTimeout(() => {
      this.viewMenu = this.viewMenu.map(x => {
        return {
          ...x,
          active: this.router.url.toLowerCase().indexOf(x.route) !== -1 ? true : false
        }
      })
    }, 500);

  }

  selectMenu(i: number) {
    this.viewMenu = this.viewMenu.map((item, index) => {
      if (index === i) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    })
    this.router.navigate([this.viewMenu[i].route])
  }
}
