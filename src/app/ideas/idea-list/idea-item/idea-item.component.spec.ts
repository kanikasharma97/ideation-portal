import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateagoPipe } from 'src/app/dateago.pipe';

import { IdeaItemComponent } from './idea-item.component';

describe('IdeaItemComponent', () => {
  let component: IdeaItemComponent;
  let fixture: ComponentFixture<IdeaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaItemComponent, DateagoPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
