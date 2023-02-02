import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable()
export class RedditApiService {

  constructor(private http: HttpClient) {}

  getRedditTop(reddit: string | null) {
    return this.http.get(`/r/${reddit}/top.json`)
      .pipe(map((res) => JSON.parse(JSON.stringify(res)?.replaceAll('&amp;', '&'))));
  }

}
