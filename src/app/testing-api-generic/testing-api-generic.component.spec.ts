import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingApiGenericComponent } from './testing-api-generic.component';

describe('TestingApiGenericComponent', () => {
  let component: TestingApiGenericComponent;
  let fixture: ComponentFixture<TestingApiGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingApiGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingApiGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
