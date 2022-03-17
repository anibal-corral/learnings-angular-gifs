import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
get results():Gif[]{
  return this.gifsService.results;
}
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

}
