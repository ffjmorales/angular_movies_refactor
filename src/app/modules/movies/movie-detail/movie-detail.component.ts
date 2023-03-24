import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from 'src/app/model/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  movie!: MovieModel.Movie;
  readonly imgBaseUrl = ConstantUri.pathImg;
  constructor(
    private readonly apiService: ApiService<any>,
    private readonly activeRoute: ActivatedRoute,
    private readonly route: Router,
  ){

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((val : any) => {
      this.getMoviesList(val.id);
    })
  }

  getMoviesList(movieId: string){
    const getConfig = { url: ConstantUri.movieDetail + '/' + movieId, params: {api_key: ConstantUri.apiKey}};
    this.apiService.getService(getConfig).subscribe(val => {
      this.movie=val;
    })
  }
  goBack(){
    this.route.navigate(['/populares']);
  }
}
