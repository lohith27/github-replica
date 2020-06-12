import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName;
  userDetails;
  constructor(private activatedRoute: ActivatedRoute, private githubApiService: GithubApiService, private route: Router) {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.githubApiService.getUserDetails(this.userName).subscribe((data) => {
      this.userDetails = data;
      console.log(this.userDetails)
    })
  }

  navigateRepos(){
    this.route.navigate(["/user/"+this.userName])
  }

  ngOnInit(): void {
  }

}
