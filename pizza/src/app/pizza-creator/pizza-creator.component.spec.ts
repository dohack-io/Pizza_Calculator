import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCreatorComponent } from './pizza-creator.component';

describe('PizzaCreatorComponent', () => {
  let component: PizzaCreatorComponent;
  let fixture: ComponentFixture<PizzaCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
