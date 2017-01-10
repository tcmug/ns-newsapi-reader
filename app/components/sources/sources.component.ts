
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NewsService, Article, Source } from "./../../services/newsservice.service";

@Component({
    selector: "sources",
    template: `
    <ScrollView>
        <StackLayout>
            <Button *ngFor="let source of sources" text="{{ source.name }}" (tap)="show(source.id)" class="submit-button" ></Button>
        </StackLayout>
    </ScrollView>
 `,
    providers: [
        NewsService
    ],
})

export class SourcesComponent {

    private sources: Source[];
    private selectedSource: String;

    constructor(private router: Router, private newsService: NewsService) {
    }

    show(source: String) {
        this.router.navigate(["/news", source]);
    }

    ngOnInit() {
        this.newsService.fetchSources()
            .subscribe(items => this.sources = items);
    }

}
