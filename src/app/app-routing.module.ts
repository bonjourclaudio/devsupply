import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ResourcesComponent } from "./pages/resources/resources.component";
import { SnippetsComponent } from "./pages/resources/snippets/snippets.component";
import { TutorialsComponent } from "./pages/resources/tutorials/tutorials.component";
import { ExamplesComponent } from "./pages/resources/examples/examples.component";
import { TemplatesComponent } from "./pages/templates/templates.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "resources/snippets", component: SnippetsComponent },
  { path: "resources/tutorials", component: TutorialsComponent },
  { path: "resources/examples", component: ExamplesComponent },
  { path: "templates", component: TemplatesComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "blog", component: BlogComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
