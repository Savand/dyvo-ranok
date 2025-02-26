import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirComponent } from './test-dir.component';

describe('TestDirComponent', () => {
  let component: TestDirComponent;
  let fixture: ComponentFixture<TestDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
