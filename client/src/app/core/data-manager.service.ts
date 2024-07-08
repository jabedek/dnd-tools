import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  constructor(private http: HttpClient) {}

  getNamesJSON(): Observable<any> {
    return this.http.get<any>(`http://localhost:4200/api/names/load`).pipe(
      tap((data) => {
        console.log(data);
      }),
    );
  }
  saveNamesJSON(): Observable<any> {
    const testData = { default: [{ value: 'name0' }, { value: 'name1' }, { value: 'name22' }] };
    return this.http.post<any>(`http://localhost:4200/api/names/save`, { data: testData }).pipe(
      tap((data) => {
        console.log(data);
      }),
    );
  }

  // saveToJSON() {}

  // loadFromJSON() {}
}
