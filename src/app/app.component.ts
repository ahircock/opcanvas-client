import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sampleCanvas = { 
    "customers": [ 1,2,3],
    'userValue': "User Value"
  }
}
