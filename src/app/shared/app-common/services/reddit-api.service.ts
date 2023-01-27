import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RedditApiService {

  constructor(private http: HttpClient) {}

  getRedditTop() {
    return this.http.get('/r/UkraineWarVideoReport/top.json');
  }

}
