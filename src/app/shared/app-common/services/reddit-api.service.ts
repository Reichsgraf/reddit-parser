import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable()
export class RedditApiService {

  apiUrl = environment.redditApiUrl;

  constructor(private http: HttpClient) {}

  getRedditTop(subreddit: string | null, category: string | null) {
    return this.http.get(`${this.apiUrl}/r/${subreddit}/${category}.json`)
      .pipe(map((res) => JSON.parse(JSON.stringify(res)?.replaceAll('&amp;', '&'))));
  }

}
