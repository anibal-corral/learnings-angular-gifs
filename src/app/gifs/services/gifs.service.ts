import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _giphyApiKey:string='bG6qD1b9AC2EqOGdzJaE7HIY1J9imfj8';
  //url example: https://api.giphy.com/v1/gifs/search?api_key=bG6qD1b9AC2EqOGdzJaE7HIY1J9imfj8&q=dragon ball z&limit=10

private _history:string[]=[];
public results:Gif[]=[];
get history(){
  return [...this._history];
}

searchGifs(query:string):void{

  query= query.trim().toUpperCase();
if(!this._history.includes(query))
{
  this._history.unshift(query);
  this._history=this._history.splice(0,10);
}
this.httpClient.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=bG6qD1b9AC2EqOGdzJaE7HIY1J9imfj8&q=${query}&limit=10`)
.subscribe((result)=>this.results=result.data);
 
  console.log(this._history);
}
  constructor(private httpClient:HttpClient) { }
}
