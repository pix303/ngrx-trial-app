import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, map, Observable, of, take, toArray } from 'rxjs';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`https://jsonplaceholder.typicode.com/todos`).pipe(
      concatAll(),
      take(10),
      map(item => {
        return { id: item.id, title: item.title, };
      }),
      toArray()
    );
  }

  removeItem(id: number): Observable<boolean> {
    const r = Math.round(Math.random() * 10);
    if (r >= 8) {
      return of(false);
    }
    return of(true);
  }
}
