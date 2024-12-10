import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { AppService } from './app.service'; 
import { CommonModule } from '@angular/common';

@NgModule({ 
    declarations: [ 
        AppComponent 
    ], 
    imports: [
         BrowserModule,CommonModule, HttpClientModule, 
        ], 
        providers: [
            AppService
        ],
         bootstrap: [
            AppComponent
        ] 
    })
     export class AppModule {}