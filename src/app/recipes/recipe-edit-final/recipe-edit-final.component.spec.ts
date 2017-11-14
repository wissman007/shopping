import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditFinalComponent } from './recipe-edit-final.component';

describe('RecipeEditFinalComponent', () => {
  let component: RecipeEditFinalComponent;
  let fixture: ComponentFixture<RecipeEditFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
