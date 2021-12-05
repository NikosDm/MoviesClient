import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  getOriginalLanguage,
  getProductionCountriesNames,
  getSpokenLanguagesNames,
  MovieDetails,
} from 'src/app/_models/MovieDetails';
import { ConfigurationService } from 'src/app/_services/configuration.service';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() selectedMovieID: number;
  @Output() backToList = new EventEmitter<any>();
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
        this.productionCountries = getProductionCountriesNames(
          response.production_countries
        );
        this.spokenLanguages = getSpokenLanguagesNames(
          response.spoken_languages
        );
        this.originalSpokenLanguage = getOriginalLanguage(
          response.original_language,
          response.spoken_languages
        );
        this.rateFiveStars = (response.vote_average * 5) / 10;
        this.selectedMovie = response;
      });
    } else {
      this.selectedMovie = null;
    }
  }

  ngOnInit(): void {}

  backToListEvent() {
    this.backToList.emit();
  }

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
