import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

import {Animal} from '../interface/animal.interface';

@Component({
  selector: 'app-chien',
  templateUrl: './chien.component.html',
  styleUrls: ['./chien.component.css']
})
export class ChienComponent implements OnInit {

  species = 'Dog';

  @Input() dogInput : Animal;
  @Output() onDogBarkEvent : EventEmitter<Animal> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  bark() {
    this.onDogBarkEvent.emit(this.dogInput)
  }

}
