import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(15000),
      tap(courses => console.log(courses))
    ); //Observable object
    // o pipe serve pra debugar no rxjs e so funciona se o servidor for nao reativo
    //ou seja, se nao ficar de tempos em tempos atualizando as informacoes
  }
}
