import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable()
export class RedditApiService {

  constructor(private http: HttpClient) {}

  getRedditTop(subreddit: string | null, category: string | null) {
    return this.http.get(`/r/${subreddit}/${category}.json`)
      .pipe(map((res) => JSON.parse(JSON.stringify(res)?.replaceAll('&amp;', '&'))));
  }

}
