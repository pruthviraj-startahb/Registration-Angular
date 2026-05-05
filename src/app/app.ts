import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'register',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  fname: string = '';
  lname: string = '';
  email: string = '';
  age: number = 0;
  clg: string = '';
  dept: string = '';

  onSubmit() {
    alert(`
         ${this.fname} \n
         ${this.lname} \n
         ${this.email} \n
         ${this.age} \n
         ${this.clg} \n
         ${this.dept} \n
         `);
  }
}
