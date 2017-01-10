
import { Injectable, Component } from "@angular/core";

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

export class Source {
    constructor() {}
}

export class Article {
    constructor() {}
}

@Injectable()
export class NewsService {

    private articlesUrl = "https://newsapi.org/v1/articles?apiKey=";
    private sourcesUrl = "https://newsapi.org/v1/sources";
    private apiKey = "ad8c85b60e3a4b6ebedebb8df7e76e3d";

    constructor(private http: Http) {
    }

    private getRequestOptions() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    public fetchSources(): RxObservable<Source[]> {
        return this.http.get(this.sourcesUrl, this.getRequestOptions())
            .map((res:Response) => res.json()['sources']);
    }

    private getArticleSourceUrl(source: string) {
        return this.articlesUrl + this.apiKey + "&source=" + source;
    }

    public fetchArticles(source: string): RxObservable<Article[]> {
        return this.http.get(this.getArticleSourceUrl(source), this.getRequestOptions())
            .map((res:Response) => res.json()['articles']);

    }

}
