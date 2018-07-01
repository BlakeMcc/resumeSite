import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSoupComponent } from './tech-soup.component';

describe('TechSoupComponent', () => {
  let component: TechSoupComponent;
  let fixture: ComponentFixture<TechSoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
