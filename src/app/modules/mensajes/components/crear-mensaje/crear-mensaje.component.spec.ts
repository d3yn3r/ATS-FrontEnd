import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMensajeComponent } from './crear-mensaje.component';

describe('CrearMensajeComponent', () => {
  let component: CrearMensajeComponent;
  let fixture: ComponentFixture<CrearMensajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMensajeComponent]
    });
    fixture = TestBed.createComponent(CrearMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
