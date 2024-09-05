import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionTemasPage } from './seleccion-temas.page';

describe('SeleccionTemasPage', () => {
  let component: SeleccionTemasPage;
  let fixture: ComponentFixture<SeleccionTemasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
