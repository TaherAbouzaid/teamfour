import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitComponatentComponent } from './git-componatent.component';

describe('GitComponatentComponent', () => {
  let component: GitComponatentComponent;
  let fixture: ComponentFixture<GitComponatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitComponatentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitComponatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
