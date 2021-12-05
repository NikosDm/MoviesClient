import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { stringify } from 'querystring';
import { MovieDetails } from 'src/app/_models/MovieDetails';
import { ConfigurationService } from 'src/app/_services/configuration.service';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() selectedMovieID: Number;
  selectedMovie: MovieDetails;
  productionCountries: string;
  spokenLanguages: string;
  originalSpokenLanguage: string;
  rateFiveStars: number;

  constructor(
    private movieService: MovieService,
    private config: ConfigurationService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.selectedMovieID?.currentValue) {
      this.movieService.getMovie(this.selectedMovieID).subscribe((response) => {
        response.poster_path = this.GetPosterImageUrl(response.poster_path);
        response.production_companies.forEach((x) => {
          x.logo_path = this.GetLogoImageUrl(x.logo_path);
        });
        this.selectedMovie = response;
        this.productionCountries = response.production_countries
          ?.map(function (c) {
            return c.name;
          })
          .join(', ');
        this.spokenLanguages = response.spoken_languages
          ?.map(function (c) {
            return c.english_name;
          })
          .join(', ');
        this.originalSpokenLanguage = response.spoken_languages.find(
          (x) => x.iso_639_1 === response.original_language
        ).english_name;
        this.rateFiveStars = (response.vote_average * 5) / 10;
      });
    }
  }

  ngOnInit(): void {}

  private GetLogoImageUrl(imageId?: string): string | null {
    const baseUrl = this.config.configuration?.images?.base_url;

    let defaultSize = '';
    if (this.config.configuration?.images?.logo_sizes.indexOf('original') > 0)
      defaultSize = 'original';
    else defaultSize = this.config.configuration?.images?.logo_sizes[0];

    if (baseUrl && defaultSize && imageId)
      return baseUrl.concat(defaultSize, imageId);

    return null;
  }

  private GetPosterImageUrl(imageId?: string): string | null {
    const baseUrl = this.config.configuration?.images?.base_url;

    let defaultSize = '';
    if (this.config.configuration?.images?.still_sizes.indexOf('original') > 0)
      defaultSize = 'original';
    else defaultSize = this.config.configuration?.images?.still_sizes[0];

    if (baseUrl && defaultSize && imageId)
      return baseUrl.concat(defaultSize, imageId);

    return null;
  }
}
