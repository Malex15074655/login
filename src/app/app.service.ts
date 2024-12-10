import {  Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({ 
    providedIn: 'root' 
}) 

export class AppService {

    private apiUrl = 'http://localhost:8080/api/auth';
   
    constructor(private http: HttpClient) { }
    login(usuario: string, contrasenna: string): Observable<any> {
        const body = { usuario, contrasenna };
        return this.http.post<any>(this.apiUrl, body);  // Regresa un Observable
      }
}
