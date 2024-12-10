import { Component, OnInit} from '@angular/core';
import { AppService } from './app.service'; 
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule], // Importa HttpClientModule en standalone
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
        // Aquí se puede redirigir al usuario a otra página o guardar datos de sesión
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
