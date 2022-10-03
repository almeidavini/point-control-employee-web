import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarComputadorComponent } from './registrar-computador.component';

describe('RegistrarComputadorComponent', () => {
  let component: RegistrarComputadorComponent;
  let fixture: ComponentFixture<RegistrarComputadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarComputadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
