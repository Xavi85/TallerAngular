import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  seasonsAverage: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.seasonsAverage = this.getAvgSeasons(series);
    });
  }
  ngOnInit() {
    this.getSeries();
  }

  getAvgSeasons(series: Serie[]): number {
    let avgSeasons: number = 0;
    series.forEach((serie) => avgSeasons += serie.seasons);
    return (avgSeasons/series.length);
  }
}
