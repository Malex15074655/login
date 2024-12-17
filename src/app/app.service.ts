import {  Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ 
    providedIn: 'root' 
}) 

export class AppService {

    private apiUrl = 'http://localhost:8080/api/autenticacion';
   
    constructor(private http: HttpClient) { }
    login(usuario: string, contrasenna: string): Observable<any> {
        const body = { usuario, contrasenna };
        return this.http.post<any>(this.apiUrl, body).pipe(
          map((respuesta) => respuesta)
            
          );
        }
}
