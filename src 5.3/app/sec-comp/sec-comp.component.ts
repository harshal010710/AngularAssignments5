import { Component } from '@angular/core';
import { FirstCompComponent } from '../first-comp/first-comp.component';

@Component({
  selector: 'app-sec-comp',
  standalone: true,
  imports: [FirstCompComponent],
  templateUrl: './sec-comp.component.html',
  styleUrl: './sec-comp.component.css'
})
export class SecCompComponent {

}
