import { Component } from '@angular/core';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MyCalculatorComponent,
  ]
})
export class AppComponent {}
