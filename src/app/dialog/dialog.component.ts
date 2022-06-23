import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Topic from '../topic.model';
import { TopicService } from 'src/app/services/topic.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  addTopicForm = this.fb.group({
    topicName: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private topicService: TopicService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewTopic() {
    if (this.addTopicForm.valid) {
      const { topicName } = this.addTopicForm.value;

      const payload = {
         name: topicName
      };
      this.topicService.createTopic(payload).subscribe(() => {
        console.log("called")
      })
    }
  }

  onNoClick(){
     this.dialog.closeAll()
  }
}
