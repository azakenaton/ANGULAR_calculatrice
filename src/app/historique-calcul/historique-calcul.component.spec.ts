import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCalculComponent } from './historique-calcul.component';

describe('HistoriqueCalculComponent', () => {
  let component: HistoriqueCalculComponent;
  let fixture: ComponentFixture<HistoriqueCalculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueCalculComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
