import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/pais.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient){}
  private apiUrl : string ='https://restcountries.com/v3.1';
  private fields: string = 'name,capital,flags,population,cca2';

  buscarPais(termino:string){
    const url =`${this.apiUrl}/name/${termino}?fields=${this.fields}`;
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino:string){
    const url =`${this.apiUrl}/capital/${termino}?fields=${this.fields}`;
    return this.http.get<Country[]>(url);
  }

  getpaisPorAlpha(id:string){
    const url =`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino:string){
    const url =`${this.apiUrl}/region/${termino}?fields=${this.fields}`;
    return this.http.get<Country[]>(url);
  }
}
