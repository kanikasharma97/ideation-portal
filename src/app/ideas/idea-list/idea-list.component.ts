import { Component, OnInit } from '@angular/core';
import { IdeaService } from 'src/app/services/idea.service';
import Idea from "../idea.model"

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {

  ideas: Idea[] = []
  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
   this.ideaService
     .fetchIdeas()
     .subscribe((ideas) => {
       this.ideas = ideas
     })
  }

}
