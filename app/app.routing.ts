import { NewsComponent } from "./components/news/news.component";
import { SourcesComponent } from "./components/sources/sources.component";
import { ArticleComponent } from "./components/article/article.component";

export const routes = [
  { path: "", component: SourcesComponent },
  { path: "news/:source", component: NewsComponent },
   { path: "article/:url", component: ArticleComponent }
];

export const navigatableComponents = [
  NewsComponent,
  SourcesComponent,
  ArticleComponent
];
