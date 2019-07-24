import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html'
})
export class SlideshowParesComponent implements OnInit {
  
  @Input() peliculas : Peliculas[];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    spaceBetween: -10,
    slidesPerView: 3.3,
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }
  async verDetalle(id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })
    modal.present();
  }

}
