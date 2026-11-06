import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  Service1 } from './service1';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    // protected readonly title = signal('myFamily0');

constructor(private httpService: Service1) { }

 ngOnInit() {
    this.getSomething();
  }
}
