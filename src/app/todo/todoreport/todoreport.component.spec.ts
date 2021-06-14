import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoreportComponent } from './todoreport.component';

describe('TodoreportComponent', () => {
  let component: TodoreportComponent;
  let fixture: ComponentFixture<TodoreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
