import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }




  search():void{
    if(this.txtSearch.nativeElement.value.trim()==='')return;
this.gifsService.searchGifs(this.txtSearch.nativeElement.value);
this.txtSearch.nativeElement.value='';
  }

}
