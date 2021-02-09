import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JuegoSearchComponent } from './juego-search.component';

describe('JuegoSearchComponent', () => {
  let component: JuegoSearchComponent;
  let fixture: ComponentFixture<JuegoSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
