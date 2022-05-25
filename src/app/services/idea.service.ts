import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  url = 'http://localhost:8080/ideas'

  constructor(private http: HttpClient) { }

  createIdea(params: any) {
    return this.http.post(this.url, params)
  }
}
