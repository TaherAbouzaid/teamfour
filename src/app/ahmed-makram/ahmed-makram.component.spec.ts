import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedMakramComponent } from './ahmed-makram.component';

describe('AhmedMakramComponent', () => {
  let component: AhmedMakramComponent;
  let fixture: ComponentFixture<AhmedMakramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AhmedMakramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmedMakramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
