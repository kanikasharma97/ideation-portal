import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of} from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {  MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateagoPipe } from 'src/app/dateago.pipe';
import { IdeaService } from 'src/app/services/idea.service';
import { TopicService } from 'src/app/services/topic.service';
import Topic from 'src/app/topic.model';
import Idea from '../idea.model';

import { IdeaCreateComponent } from './idea-create.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


// mocks
class TopicMockService {
  getTopics() {
    return of([
      new Topic('1', 'test topic 1'),
      new Topic('2', 'test topic 2')
    ])
  }
}

class IdeaMockService {
  fetchIdeas() {
    return of([
      new Idea('Test idea 1', 'TestContent 1', ''),
      new Idea('Test idea 2', 'TestContent 2', '')
    ])
  }

  createIdea() {
    return of()
  }

}

class MatSnackBarService {}


describe('IdeaCreateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IdeaCreateComponent,
        DateagoPipe
      ],
      providers: [
        { provide: IdeaService, useClass: IdeaMockService},
        { provide: TopicService, useClass: TopicMockService},
        FormBuilder,
        { provide: MatSnackBar, useClass: MatSnackBarService },

      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatDialogModule
      ]
    })
  });

  it('should show the form to create idea', () => {
    const fixture = TestBed.createComponent(IdeaCreateComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement
    const heading = el.querySelector('h1').textContent.trim()
    const titleInput = el.querySelector('[aria-label="Idea title"]')
    const contentInput = el.querySelector('[aria-label="Idea content"]')
    const topicInput = el.querySelector('[aria-label="Pick Topics"]')

    expect(heading).toEqual('Create Idea');
    expect(titleInput).toBeTruthy();
    expect(contentInput).toBeTruthy();
    expect(topicInput).toBeTruthy();
  });

  it('should allow to select topics', () => {
    const fixture = TestBed.createComponent(IdeaCreateComponent);
    fixture.componentInstance.selectTopic({ option: {value: '1', viewValue: 'test topic 1'}})
    fixture.componentInstance.selectTopic({ option: {value: '2', viewValue: 'test topic 2'}})
    fixture.detectChanges();
    const el = fixture.nativeElement

    expect(el.querySelectorAll('mat-chip').length).toEqual(2)
  });

  it('should allow to unSelect topics', () => {
    const fixture = TestBed.createComponent(IdeaCreateComponent);
    fixture.componentInstance.selectTopic({ option: {value: '1', viewValue: 'test topic 1'}})
    fixture.componentInstance.selectTopic({ option: {value: '2', viewValue: 'test topic 2'}})
    fixture.componentInstance.removeTopic(new Topic('1', 'test topic 1'))
    fixture.detectChanges();
    const el = fixture.nativeElement

    expect(el.querySelectorAll('mat-chip').length).toEqual(1)
  });

  it('should show errors on invalid idea submission', () => {
    const fixture = TestBed.createComponent(IdeaCreateComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement
    const btn = el.querySelector('button')
    btn.click()
    fixture.detectChanges()
    const titleFormField = el.querySelector('[aria-label="Idea title"]').closest('mat-form-field')
    const contentFormField = el.querySelector('[aria-label="Idea content"]').closest('mat-form-field')

    expect(titleFormField).toHaveClass('mat-form-field-invalid')
    expect(contentFormField).toHaveClass('mat-form-field-invalid')
  });

  xit('should  create idea', () => {
    const fixture = TestBed.createComponent(IdeaCreateComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement
    const titleInput = el.querySelector('[aria-label="Idea title"]')
    const contentInput = el.querySelector('[aria-label="Idea content"]')
    titleInput.value = 'title'
    contentInput.value = 'content'
    // fixture.componentInstance.selectTopic({ option: {value: '1', viewValue: 'test topic 1'}})

    fixture.detectChanges()

    const btn = el.querySelector('button')
    btn.click()

  });

});
