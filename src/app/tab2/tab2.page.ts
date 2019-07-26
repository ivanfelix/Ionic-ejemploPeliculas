import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['spiderman', 'jhon wick', 'alita'];
  resultados : Pelicula[] = [];

  constructor(private movieService: MoviesService) {}

  buscar(event){
    const valor = event.detail.value;
    console.log(valor)
    this.movieService.buscarPelicula(valor).subscribe(
      peliculas => {
        this.resultados = peliculas.results;
        console.log(this.resultados);
      }
    )
  }

}
