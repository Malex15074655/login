import { Component} from '@angular/core';
import { AppService } from './app.service'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule], // Importa HttpClientModule en standalone "libreria"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: string = '';
  contrasenna: string = '';
  errorMessage: string = '';

  constructor(private appService: AppService) {}

  onLogin(): void {
    this.appService.login(this.usuario, this.contrasenna).subscribe({
      next: (response) => {
        console.log('Login exitoso', response);
        
      },
      error: (error) => {
        console.error('Error de login', error);
        this.errorMessage = 'Credenciales incorrectas';
      },
      complete: () => {
        console.log('Proceso de login completado');
      }
    });
  }
}
