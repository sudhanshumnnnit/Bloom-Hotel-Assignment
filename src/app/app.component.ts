import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPoc';
  message;
  constructor(private data:DataService){

  }
  ngOnInit(){
    this.data.currentMessage.subscribe(msg=>this.message=msg);
  }
}
