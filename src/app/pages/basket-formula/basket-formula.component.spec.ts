import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketFormulaComponent } from './basket-formula.component';

describe('BasketFormulaComponent', () => {
  let component: BasketFormulaComponent;
  let fixture: ComponentFixture<BasketFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketFormulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
