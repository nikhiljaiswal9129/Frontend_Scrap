import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class appService {
    private baseURL = 'http://localhost:8800';

    constructor(private http: HttpClient) {}

    getItems(): Observable<any[]> {
        return this.http.get<any[]>(this.baseURL);
    }

    deleteItem(ItemId: any): Observable<any> {
        return this.http.delete<any>(`${this.baseURL}/${ItemId}`);
    }

    updateItem(ItemId: any, newItemData: any): Observable<any> {
        return this.http.put<any>(`${this.baseURL}/${ItemId}`, newItemData);
    }

    logIn(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/login`, userData);
    }

    // createUser(userData: any): Observable<any> {
    //     return this.http.post<any>(`${this.baseURL}/register`, userData);
    // }

    createUser(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}`, userData)
          .pipe(
            catchError((error) => {
              console.error(error);
              return of(null);
            })
          );
      }
}