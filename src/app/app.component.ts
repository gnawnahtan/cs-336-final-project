import { Component } from '@angular/core';
import { DataService } from './dataservice';

@Component({
  selector: 'app-root',
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RateMyCourse';
}
