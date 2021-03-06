import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm;
  userData;
  userRepos;
  constructor() {
    this.searchForm=new FormGroup({
      userName : new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

}
