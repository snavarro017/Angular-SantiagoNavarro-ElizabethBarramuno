import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { JuegosComponent } from './juegos.component';

describe('JuegosComponent', () => {
  let component: JuegosComponent;
  let fixture: ComponentFixture<JuegosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
