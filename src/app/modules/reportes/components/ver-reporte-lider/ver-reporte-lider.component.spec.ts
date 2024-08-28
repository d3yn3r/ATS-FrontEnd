import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReporteLiderComponent } from './ver-reporte-lider.component';

describe('VerReporteLiderComponent', () => {
  let component: VerReporteLiderComponent;
  let fixture: ComponentFixture<VerReporteLiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReporteLiderComponent]
    });
    fixture = TestBed.createComponent(VerReporteLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
