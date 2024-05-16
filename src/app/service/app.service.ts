import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, of } from "rxjs";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class appService {
    // private isAdmin$: Observable<boolean> = new Observable<boolean>();
    public userLoggedIn: BehaviorSubject<boolean>;

    private baseURL = 'http://localhost:8800';

    constructor(private http: HttpClient) {
        this.userLoggedIn = new BehaviorSubject<boolean>(false);
    }

    setUserLoggedIn(value: boolean): void {
        this.userLoggedIn.next(value);
    }

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

    createUser(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/register`, userData)
        .pipe(
        catchError((error) => {
            console.error(error);
            return of(null);
        })
        );
    }

    createAdmin(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/register-admin`, userData)
        .pipe(
        catchError((error) => {
            console.error(error);
            return of(null);
        })
        );
    }

    getAllUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseURL}/allUser`);
    }

    getAllRoles(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseURL}/allRole`);
    }

    createRole(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseURL}/signUp`, userData)
        .pipe(
        catchError((error) => {
            console.error(error);
            return of(null);
        })
        );
    }
}