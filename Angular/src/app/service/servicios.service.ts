import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(environment.API_URL+url);
  }

  post(url:string,data:any){
    return this.http.post(environment.API_URL+url,data);
  };

}