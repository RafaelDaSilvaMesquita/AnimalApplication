import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Animal } from "../model/animal.model";

@Injectable({
    providedIn: 'root'
  })
  
export class AnimalService {

    public pupdatez(id: number,data: any) {
        return this.http.put(`${this.animalsURL}animals/${id}`, data);
    }

    public update(id: any, data: any): Observable<any> {
        return this.http.put(`${this.animalsURL}update/${id}`, data);
    }


    private animalsURL!: string;

    constructor(private http: HttpClient) {
        this.animalsURL = 'http://localhost:8080/animals/'
    }

    public findAll(): Observable<Animal[]> {
        return this.http.get<Animal[]>(this.animalsURL+"animals");
    }

    public get(id: any): Observable<Animal> {
        return this.http.get<Animal>(`${this.animalsURL}animals/${id}`);
    }

    public save(animal:Animal): Observable<Animal> {
        return this.http.post<Animal>(this.animalsURL+"addanimal", animal);
    }

    public delete(id: any): Observable<any> {
        return this.http.delete(`${this.animalsURL}delete/${id}`);
    }

    public deleteAll():Observable<any> {
    return this.http.delete(this.animalsURL+"deleteAll");
    }
}
function data(arg0: string, data: any) {
    throw new Error('Function not implemented.');
}
