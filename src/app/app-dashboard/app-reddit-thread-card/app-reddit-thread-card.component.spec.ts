import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRedditThreadCardComponent } from './app-reddit-thread-card.component';

describe('AppRedditThreadComponent', () => {
  let component: AppRedditThreadCardComponent;
  let fixture: ComponentFixture<AppRedditThreadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRedditThreadCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRedditThreadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
