import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LizenzComponent } from './lizenz.component';

describe('LizenzComponent', () => {
  let component: LizenzComponent;
  let fixture: ComponentFixture<LizenzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizenzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
