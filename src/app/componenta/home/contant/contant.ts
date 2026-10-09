import { Component, Input } from '@angular/core';
import { Person } from '../../../interfice/person'; 


@Component({
  imports: [],
  selector: 'app-contant',
  styleUrl: './contant.css',
  templateUrl: './contant.html',
})
export class Contant {
  @Input() ss: Person | undefined
}
