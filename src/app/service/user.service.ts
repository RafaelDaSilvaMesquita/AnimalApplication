import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Animal } from '../model/animal.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  public pupdatez(id: number, data: any) {
    //throw new Error('Method not implemented.');
    return this.http.put(`${this.usersUrl}update/${id}`, data);
  }

  public update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.usersUrl}update/${id}`, data);
  }


  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/users/'
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"get");
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}get/${id}`);
  }

  public save(user:User): Observable<User> {
    return this.http.post<User>(this.usersUrl+"add", user);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.usersUrl}delete/${id}`);
  }

  public deleteAll(): Observable<any> {
    return this.http.delete(this.usersUrl+"deleteAll");
  }

  getAnimalsList(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.usersUrl+"adduser");
  }

}
function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

