import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radom-chuck-norris-joke',
  templateUrl: './radom-chuck-norris-joke.component.html',
  styleUrls: ['./radom-chuck-norris-joke.component.css']
})
export class RadomChuckNorrisJokeComponent implements OnInit {

  randomJokeObj: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getRandomJoke = () => {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data: any) => this.randomJokeObj = data.value)
  }

}
