import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  textoBuscar = '';
  ideas: string[] = ['spiderman', 'jhon wick', 'alita'];
  resultados : Pelicula[] = [];
  buscando = false;

  constructor(private movieService: MoviesService, private modalCtrl: ModalController) {}

  ngOnInit(){
    console.log(this.resultados.length);
  }

  buscar(event){

    if(event.detail.value == ''){
      this.buscando = false;
      this.resultados = [];
      return;
    }

    this.buscando = true;
    const valor = event.detail.value;
    console.log(valor)
    this.movieService.buscarPelicula(valor).subscribe(
      peliculas => {
        this.resultados = peliculas.results;
        console.log(this.resultados);
        this.buscando = false;
      }
    )
  }

  async detalle(id: string){
    console.log(id);
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })
    modal.present();
  }

}
