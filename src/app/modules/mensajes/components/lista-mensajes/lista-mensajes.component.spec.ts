import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMensajesComponent } from './lista-mensajes.component';

describe('ListaMensajesComponent', () => {
  let component: ListaMensajesComponent;
  let fixture: ComponentFixture<ListaMensajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMensajesComponent]
    });
    fixture = TestBed.createComponent(ListaMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
