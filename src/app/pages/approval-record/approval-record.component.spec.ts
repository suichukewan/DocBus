import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRecordComponent } from './approval-record.component';

describe('ApprovalRecordComponent', () => {
  let component: ApprovalRecordComponent;
  let fixture: ComponentFixture<ApprovalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
