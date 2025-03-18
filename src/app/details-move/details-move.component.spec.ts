import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMoveComponent } from './details-move.component';

describe('DetailsMoveComponent', () => {
  let component: DetailsMoveComponent;
  let fixture: ComponentFixture<DetailsMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsMoveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
