import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {differenceBy} from 'lodash'
import { of, switchMap , debounceTime} from 'rxjs';
import { IdeaService } from 'src/app/services/idea.service';
import { TopicService } from 'src/app/services/topic.service';
import Topic from "../../topic.model"

@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.component.html',
  styleUrls: ['./idea-create.component.css']
})
export class IdeaCreateComponent implements OnInit {
  ideaForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    search: ['']
  })
  
  topics: Topic[] = []
  filteredTopics: any = [];
  isTopicLoading: boolean = false;

  constructor(private fb: FormBuilder, private topicService: TopicService, private ideaService: IdeaService) {}

  ngOnInit() {
    this.ideaForm.controls['search'].valueChanges.pipe(
      debounceTime(500), 
      switchMap((searchVal) => {
        if (searchVal) {
          this.filteredTopics = [{id: '', value: ''}];
          return this.topicService.getTopics(searchVal)
        } else {
          return of([])
        }
      })
    ).subscribe((topics: any) => {
      this.filteredTopics = differenceBy(
                              topics, 
                              this.topics, 
                              'id'
                            )
    })
  }

  selectTopic(event: any) {
    this.topics.push(new Topic(event.option.value,  event.option.viewValue))
  }

  removeTopic(removedTopic: Topic) {
    this.topics = this.topics.filter((topic) => topic.id !== removedTopic.id)
  }

  submitForm() {
    if (this.ideaForm.valid) {
      const {
        content,
        title,
      } = this.ideaForm.value
      
      const payload = {
        content,
        title,
        topics: this.topics.map((topic) => topic.id)
      }
  
      this.ideaService.createIdea(payload).subscribe(() => {
        console.log('saved...')
      })
    }
  }
}
