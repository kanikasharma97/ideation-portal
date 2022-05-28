import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ideation-portal'
  path = window.location.pathname

  routes = {
    IDEA_CREATE: '/idea-create',
    IDEA_LIST: '/idea-list',
    IDEA_DETAILS: '/idea-details'
  }
}
