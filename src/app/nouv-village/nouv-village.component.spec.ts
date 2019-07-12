import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvVillageComponent } from './nouv-village.component';

describe('NouvVillageComponent', () => {
  let component: NouvVillageComponent;
  let fixture: ComponentFixture<NouvVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
