import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestingComponent';
  public name = '';
  public marks = 0;
  public error = '';

  handler(str) {
    console.log('In app handler .....', str);
    this.error = str;

  }
}
