import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
showTitle;
  
  constructor(private route: ActivatedRoute,private router: Router,private data:DataService) { 
    this.showTitle=false;
  }

  ngOnInit() {
   // this.href = this.router.url;
        console.log("this.router.url",this.router.url);
        if(this.router.url==='/'){
          this.showTitle=true;
        }

        
  }

}
