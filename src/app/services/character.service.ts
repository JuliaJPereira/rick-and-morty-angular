import { Info } from './../models/info';
import { Character } from './../models/character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface getAllResult{
  info: Info;
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  getAll(){
    const url = `${environment.apiUrl}/character`;
    return this.http.get<getAllResult>(url);
  }
}
