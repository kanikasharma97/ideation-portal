import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, of, map } from 'rxjs';
import Idea from '../ideas/idea.model';


@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  url = 'http://localhost:8080/ideas'

  constructor(private http: HttpClient) { }

  createIdea(params: any) {
    return this.http.post(this.url, params)
  }

  fetchIdeas() {
    return this.http.get(`${this.url}`).pipe(
      retry(3),
      map(
        (val: any) => val.map(({name, content, createrInfo}: any) => new Idea(name, content, createrInfo, []))
      ),
      catchError(() => {
        console.log("called")
        return of([])
      })
    )
  }
}
