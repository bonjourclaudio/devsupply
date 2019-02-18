import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SnippetsComponent } from './pages/resources/snippets/snippets.component';
import { TutorialsComponent } from './pages/resources/tutorials/tutorials.component';
import { ExamplesComponent } from './pages/resources/examples/examples.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    AboutComponent,
    BlogComponent,
    ResourcesComponent,
    SnippetsComponent,
    TutorialsComponent,
    ExamplesComponent,
    TemplatesComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
