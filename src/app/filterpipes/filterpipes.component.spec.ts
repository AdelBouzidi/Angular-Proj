import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpipesComponent } from './filterpipes.component';

describe('FilterpipesComponent', () => {
  let component: FilterpipesComponent;
  let fixture: ComponentFixture<FilterpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterpipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
