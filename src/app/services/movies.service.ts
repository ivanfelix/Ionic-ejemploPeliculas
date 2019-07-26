import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, RespuestaCredits, PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  popularesPage = 0;

  constructor(private http: HttpClient) { }

  obtenerPeliculas(){
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=7b58632146cdf48f4a10a3d8dc803099');
  }
  obtenerPopulares(){
    this.popularesPage++;
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7b58632146cdf48f4a10a3d8dc803099&page=${this.popularesPage}`);
  }
  getPeliculaDetalle(id: string){
    return this.http.get<PeliculaDetalle>(`https://api.themoviedb.org/3/movie/${id}?api_key=7b58632146cdf48f4a10a3d8dc803099`);
  }

  getActores(id: string){
    return this.http.get<RespuestaCredits>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7b58632146cdf48f4a10a3d8dc803099`);
  }

  buscarPelicula(valor: string){
    return this.http.get<RespuestaMDB>(` https://api.themoviedb.org/3/search/movie?api_key=7b58632146cdf48f4a10a3d8dc803099&language=es-MX&page=1&include_adult=false&query=${valor}`);
  }

}