import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users;
  userName;
  constructor(private userServiceService:UserServiceService,private data:DataService) { 
    this.data.changeMessage({default:'',header:'Search For Profile'});
  }

  ngOnInit() {
  }

  getByProfileName(name){
    this.userServiceService.getByProfileName(name).subscribe(users=>{
      this.users=users;
    });
  }
}
