import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecCompComponent } from './sec-comp/sec-comp.component';

@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstCompComponent, SecCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'AngularAssignment5_2';
}
