import { Component } from "@angular/core";
import { NewsService, Article, Source } from "./../../services/newsservice.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "article",
    template: `
        <ScrollView>
            <WebView src="{{ url }}"></WebView>
        </ScrollView>
 `,
    providers: [
        NewsService
    ],
})

export class ArticleComponent {
    private url: string;
    constructor(private route: ActivatedRoute) {
           this.url = decodeURIComponent(this.route.snapshot.params['url']);
    }
}
