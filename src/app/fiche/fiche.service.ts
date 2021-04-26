import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8081',
    'Access-Control-Allow-Headers': ' Content-Type, Accept',
    'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin'

   })
   
baseURL = "http://localhost:8081/fiche"
  constructor(private httpClient : HttpClient) {}
 
  getFiches(){
    return this.httpClient.get('/api/fiche/' , {headers: this.headers})
 
  }

 
  addFiche( data : string){
    return this.httpClient.post(this.baseURL + '/create/', data ,  { 'headers': this.headers })

  }


}
