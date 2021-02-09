import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { JuegoDetalleComponent } from './juego-detalle.component';

describe('JuegoDetalleComponent', () => {
  let component: JuegoDetalleComponent;
  let fixture: ComponentFixture<JuegoDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
