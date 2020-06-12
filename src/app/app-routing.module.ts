import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: SearchComponent
  },
  {
    path: "user/:userName",
    component: ResultComponent
  },
  {
    path:"home/:userName",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
