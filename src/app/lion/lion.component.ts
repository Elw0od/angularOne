import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

import {Animal} from '../interface/animal.interface';

@Component({
  selector: 'app-lion',
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.css']
})
export class LionComponent implements OnInit {

  species = "Leon";

  @Input() leonInput : Animal;
  @Output() onLeonRoarEvent : EventEmitter<Animal> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  roar() {
    this.onLeonRoarEvent.emit(this.leonInput)
  }

}
