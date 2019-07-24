import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';

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

}
