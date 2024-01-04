import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  count = 0
  click1 = 0;
  clickMe() {
    this.count++;
  }

  value = '';
  value1=''
  handle(event: any) {
    this.value = (event.target as HTMLInputElement ).value;
  }
}
