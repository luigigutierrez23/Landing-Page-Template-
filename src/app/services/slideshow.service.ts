//Importamos el decorador Injectable, para inyectar clases de dependencia en los componentes
import { Injectable } from '@angular/core';
//Este modulo es para conectarnos a cualquier API con peticiones http
import { HttpClient } from '@angular/common/http';

//Definimos el decorador injectable
@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  public url: string;

  constructor(private http: HttpClient) { 
    
    this.url = "assets/js/json/slide.json";

  }

  getSlide(){

    return this.http.get(this.url);

  }

}
