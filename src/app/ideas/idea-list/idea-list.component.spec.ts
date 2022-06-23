import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';
import { DateagoPipe } from 'src/app/dateago.pipe';
import { IdeaService } from 'src/app/services/idea.service';
import Idea from '../idea.model';
import { IdeaItemComponent } from './idea-item/idea-item.component';

import { IdeaListComponent } from './idea-list.component';


class IdeaMockService {
  fetchIdeas() {
    return of([
      new Idea('Test idea 1', 'TestContent 1', 'Mon Jun 20 2022 22:48:23'),
      new Idea('Test idea 2', 'TestContent 2', 'Mon Jun 20 2022 22:48:23')
    ])
  }

  createIdea() {
    return of()
  }

}

describe('IdeaListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaListComponent, IdeaItemComponent, DateagoPipe ],
      providers: [
        {
          provide: IdeaService,
          useClass: IdeaMockService
        }
      ],
      imports: [
        MatCardModule
      ]
    })
  });

  it('should show idea list', () => {
    const fixture = TestBed.createComponent(IdeaListComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement

    expect(el.querySelectorAll('mat-card').length).toEqual(2);
    expect(el.querySelectorAll('mat-card-title')[0].textContent).toEqual('Test idea 1');
    expect(el.querySelectorAll('mat-card-content')[0].textContent.trim()).toEqual('TestContent 1');
    expect(el.querySelectorAll('mat-card-actions')[0].children[0].getAttribute('aria-label')).toEqual('Upvote');
    expect(el.querySelectorAll('mat-card-actions')[0].children[1].getAttribute('aria-label')).toEqual('Downvote');
    expect(el.querySelectorAll('mat-card-actions')[0].children[2].getAttribute('aria-label')).toEqual('Comment');

    expect(el.querySelectorAll('mat-card-title')[1].textContent).toEqual('Test idea 2');
    expect(el.querySelectorAll('mat-card-content')[1].textContent.trim()).toEqual('TestContent 2');
    expect(el.querySelectorAll('mat-card-actions')[1].children[0].getAttribute('aria-label')).toEqual('Upvote');
    expect(el.querySelectorAll('mat-card-actions')[1].children[1].getAttribute('aria-label')).toEqual('Downvote');
    expect(el.querySelectorAll('mat-card-actions')[1].children[2].getAttribute('aria-label')).toEqual('Comment');
  });
});
