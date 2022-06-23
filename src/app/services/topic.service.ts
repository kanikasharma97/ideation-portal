import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, retry, catchError, map } from 'rxjs';

import Topic from '../topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  url = 'http://localhost:8080/topics'

  constructor(private http: HttpClient) { }

  // to do create operator retry with exponential backoff
  getTopics(searchStr: string) {
    return this.http.get(`${this.url}?q=${searchStr}`).pipe(
      retry(3), // retry 3 times
      map(
        (val: any) => val.map(({id, name}: any) => new Topic(id, name))
      ),
      catchError(
        () => {
          return of([])
        }
      ),
    )
  }

  createTopic(params: any) {
    return this.http.post(this.url, params)
  }

}
