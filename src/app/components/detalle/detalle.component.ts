import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle;
  oculto = 150;
  actores : Cast[] = [];
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  }

  constructor(private movieService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.movieService.getPeliculaDetalle(this.id).subscribe(
      pelicula =>{
        console.log(pelicula);
        this.pelicula = pelicula;
      }
    )
    this.movieService.getActores(this.id).subscribe(
      actores =>{
        console.log(actores);
        this.actores = actores.cast;
      }
    )
  }
  regresar(){
    this.modalCtrl.dismiss();
  }

}
