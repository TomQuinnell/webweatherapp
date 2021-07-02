import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSnapshotComponent } from './big-snapshot.component';

describe('BigSnapshotComponent', () => {
  let component: BigSnapshotComponent;
  let fixture: ComponentFixture<BigSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
