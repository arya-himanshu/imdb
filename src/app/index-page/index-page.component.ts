import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../service/movie/movieservice.service';
import { Movie } from '../pojo/movie/movie';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  array = [1, 56, 5, 47, 5, 47]

  movie_array: Movie[];
  constructor(private movieservice: MovieserviceService) { }

  ngOnInit() {
    this.getMovies()
  }


  getMovies() {
    this.movieservice.getMovies().subscribe(movies => this.movie_array = movies)
  }

}
