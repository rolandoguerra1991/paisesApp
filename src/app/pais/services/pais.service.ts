import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../intefaces/paises-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  getHttpParams() {
    return new HttpParams()
    .set('fields', 'name,capital,flags,altSpellings,population');
  }

  buscarPais(termino: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getHttpParams() });
  }

  buscarCapital(termino: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getHttpParams() });
  }

  getPaisIndividual(id: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  getPaisesPorRegion(region: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.getHttpParams() });
  }
}
