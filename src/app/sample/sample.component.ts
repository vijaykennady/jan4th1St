import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  fname = 'Vijay';
  lanem = 'Kumar';
  title = 'Vinoth';
  name = 'Harish';
  color = 'green';

  
  stringinterpolation = "Learning Angular";

  getTitle() {
    return this.title;
  }

  getMax(first: number, second: number) {
    return Math.max(first, second);
  }
}
