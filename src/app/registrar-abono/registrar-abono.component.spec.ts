import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAbonoComponent } from './registrar-abono.component';

describe('RegistrarAbonoComponent', () => {
  let component: RegistrarAbonoComponent;
  let fixture: ComponentFixture<RegistrarAbonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAbonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
