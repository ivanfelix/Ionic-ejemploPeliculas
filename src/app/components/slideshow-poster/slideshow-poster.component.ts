import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html'
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas : Pelicula[];

  slideOpts = {
    spaceBetween: 0,
    slidesPerView: 3.3
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
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
