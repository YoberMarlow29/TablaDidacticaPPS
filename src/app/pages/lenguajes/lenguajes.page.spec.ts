import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LenguajesPage } from './lenguajes.page';

describe('LenguajesPage', () => {
  let component: LenguajesPage;
  let fixture: ComponentFixture<LenguajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
