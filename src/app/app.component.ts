import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MyCalculatorComponent
  ]
})
export class AppComponent {}
