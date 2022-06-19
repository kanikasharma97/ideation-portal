import { Component, Input, OnInit } from '@angular/core';
import Idea from "../../idea.model"

@Component({
  selector: 'app-idea-item',
  templateUrl: './idea-item.component.html',
  styleUrls: ['./idea-item.component.css']
})
export class IdeaItemComponent implements OnInit {

  @Input() idea: Idea = new Idea('', '', '')
  constructor() { }

  ngOnInit(): void {
  }

}
