import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkGridComponent } from './network-grid.component';

describe('NetworkGridComponent', () => {
  let component: NetworkGridComponent;
  let fixture: ComponentFixture<NetworkGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
