import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricipalViewComponent } from './pricipal-view.component';

describe('PricipalViewComponent', () => {
  let component: PricipalViewComponent;
  let fixture: ComponentFixture<PricipalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricipalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricipalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
