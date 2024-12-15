import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringDataComponent } from './filtering-data.component';

describe('FilteringDataComponent', () => {
  let component: FilteringDataComponent;
  let fixture: ComponentFixture<FilteringDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
