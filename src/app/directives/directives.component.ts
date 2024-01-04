import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  movie = ['Master', 'Leo', 'Varisu'];

  movies = [{ Name: 'Master', Director: 'Loki', Hero: 'Thalapathy' },
  { Name: 'Leo', Director: 'Loki', Hero: 'Thalapathy' },
  { Name: 'Varisu', Director: 'Vamshi', Hero: 'Thalapathy' }];

  num = 0;

  showMe = true;

  enableRed = false;
  enableBig = false;
  enableSty = false;
}
