import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSnapshotComponent } from './row-snapshot.component';

describe('RowSnapshotComponent', () => {
  let component: RowSnapshotComponent;
  let fixture: ComponentFixture<RowSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
