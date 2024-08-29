import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesItemComponent } from './notificaciones-item.component';

describe('NotificacionesItemComponent', () => {
  let component: NotificacionesItemComponent;
  let fixture: ComponentFixture<NotificacionesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacionesItemComponent]
    });
    fixture = TestBed.createComponent(NotificacionesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
