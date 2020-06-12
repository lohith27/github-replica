import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../github-api.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data;
  repos;
  username;
  pageOfItems: Array<any>;

  constructor(private activatedRoute: ActivatedRoute, private githubApiService:GithubApiService) { 
    this.username = this.activatedRoute.snapshot.params.userName;
console.log(this.username);
 this.githubApiService.getUserDetails(this.username).subscribe((value)=>{

   this.data = value;
 }
 )
 this.githubApiService.getRepoDetails(this.username).subscribe((repos)=> {
  this.repos = repos;
  console.log(this.repos);
})
  }

  ngOnInit(): void {
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
}
