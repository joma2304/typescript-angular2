import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url: string = 'https://webbutveckling.miun.se/files/ramschema_ht23.json' //URL för kursdata

  constructor(private http: HttpClient) { }

  //Hämtar kurser
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
