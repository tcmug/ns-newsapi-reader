import { Component } from "@angular/core";
import { NewsService, Article, Source } from "./../../services/newsservice.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
    selector: "news",
    template: `
    <StackLayout>
        <Button *ngFor="let article of articles" text="{{ article.title }}" (tap)="show(article.url)"></Button>
    </StackLayout>
 `,
    providers: [
        NewsService
    ],
})

export class NewsComponent {

    private selectedSource: string;
    private articles: Article[];

    constructor(private router: Router, private route: ActivatedRoute, private newsService: NewsService) {

        this.selectedSource = this.route.snapshot.params['source'];
        this.newsService.fetchArticles(this.selectedSource)
            .subscribe(items => this.articles = items);
    }

    show(url: string) {
        this.router.navigate(["/article", encodeURIComponent(url)]);
    }
}
