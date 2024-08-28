import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarReporteComponent } from './revisar-reporte.component';

describe('RevisarReporteComponent', () => {
  let component: RevisarReporteComponent;
  let fixture: ComponentFixture<RevisarReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisarReporteComponent]
    });
    fixture = TestBed.createComponent(RevisarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
