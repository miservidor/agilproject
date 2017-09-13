import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronosComponent } from './chronos.component';

describe('ChronosComponent', () => {
  let component: ChronosComponent;
  let fixture: ComponentFixture<ChronosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
