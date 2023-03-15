import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchFormComponent } from './app-search-form.component';

describe('AppSearchFormComponent', () => {
  let component: AppSearchFormComponent;
  let fixture: ComponentFixture<AppSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
