import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMisionComponent } from './detalle-mision.component';

describe('DetalleMisionComponent', () => {
  let component: DetalleMisionComponent;
  let fixture: ComponentFixture<DetalleMisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleMisionComponent]
    });
    fixture = TestBed.createComponent(DetalleMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
