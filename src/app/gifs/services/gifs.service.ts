import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _giphyApiKey:string='bG6qD1b9AC2EqOGdzJaE7HIY1J9imfj8';
  private _url:string = 'https://api.giphy.com/v1/gifs';
  //url example: https://api.giphy.com/v1/gifs/search?api_key=bG6qD1b9AC2EqOGdzJaE7HIY1J9imfj8&q=dragon ball z&limit=10

private _history:string[]=[];
public results:Gif[]=[];
get history(){
  return [...this._history];
}

searchGifs(query:string):void{

  const params = new HttpParams().set('api_key', this._giphyApiKey).set('limit','10').set('q', query);


  query= query.trim().toUpperCase();
if(!this._history.includes(query))
{
  this._history.unshift(query);
  this._history=this._history.splice(0,10);
  localStorage.setItem('history', JSON.stringify(this._history));
}
this.httpClient.get<SearchGifsResponse>(`${this._url}/search`,{params})
.subscribe((result)=>{
this.results=result.data;
localStorage.setItem('results',JSON.stringify(result.data));
}
);
 
}
  constructor(private httpClient:HttpClient) { 
    
    // localStorage.getItem('history');
    if(localStorage.getItem('history')){
      this._history = JSON.parse(localStorage.getItem('history')!);
    }
    if(localStorage.getItem('results')){
      this.results = JSON.parse(localStorage.getItem('results')!);
    }


  }
}
