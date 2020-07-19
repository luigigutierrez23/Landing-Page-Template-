import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../../../services/slideshow.service';

declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  /*---------------   Variables publicas    ----------------*/
  public slideJson:any;
  public renderSlide:boolean = true;

  constructor(private slideService : SlideshowService) { 

    /*---------------------------------------
    RECIBIENDO DATOS DINAMICOS
    --------------------------------------*/

    this.slideService.getSlide()
    .subscribe( result =>{

      this.slideJson = result;
      
    })

  }

  ngOnInit(){

  }

  callback(){

    if(this.renderSlide){
      
        this.renderSlide = false;

       /*=============================================
        JD SLIDER
        =============================================*/

        $('.slideshow').jdSlider({

          wrap:'.slide-inner', //Especificar el slide que vamos a usar
          isAuto: true, //Inicia la animación automáticamente
          isLoop: true, //Al finalizar vuelve a comenzar
          interval: 7000, //Tiempo por cada slide
          isCursor:true //Pausar animación con el mouse

        });
    }
   
  }

}
