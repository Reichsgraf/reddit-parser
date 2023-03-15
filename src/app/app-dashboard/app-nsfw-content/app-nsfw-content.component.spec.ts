import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNsfwContentComponent } from './app-nsfw-content.component';

describe('AppNsfwContentComponent', () => {
  let component: AppNsfwContentComponent;
  let fixture: ComponentFixture<AppNsfwContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNsfwContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNsfwContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
