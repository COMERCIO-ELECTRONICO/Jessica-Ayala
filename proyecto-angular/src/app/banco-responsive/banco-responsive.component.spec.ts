import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoResponsiveComponent } from './banco-responsive.component';

describe('BancoResponsiveComponent', () => {
  let component: BancoResponsiveComponent;
  let fixture: ComponentFixture<BancoResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
