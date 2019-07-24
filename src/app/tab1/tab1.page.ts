import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Peliculas } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Peliculas[] = [];
  peliculasPopulares: Peliculas[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(){
    this.moviesService.obtenerPeliculas().subscribe(peliculas => {
      this.peliculasRecientes = peliculas.results;
    })
    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.moviesService.obtenerPopulares().subscribe(populares => {
      const arrTemp = [ ...this.peliculasPopulares, ...populares.results ]
      this.peliculasPopulares = arrTemp;
    })
  }

}
