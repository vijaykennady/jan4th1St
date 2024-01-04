import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
car:String[]=[];
val='';
gets(){
  this.car.push(this.val);
  this.val='';
  console.log(this.car);
}
}
