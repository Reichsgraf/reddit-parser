import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RedditApiService {

  constructor(private http: HttpClient) {}

  getRedditTop(reddit: string | null) {
    return this.http.get(`/r/${reddit}/top.json`);
  }

}
