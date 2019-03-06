import { Component, OnInit } from '@angular/core';

import {Animal} from '../interface/animal.interface';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit {

  animalList : Animal[] = [
    {
      name : 'Didou',
      breed : 'European Cat',
      type : 0,
      talk : '../assets/sound/true.mp3'
    },
    {
      name : 'Fly Dog',
      breed : 'European Dog',
      type : 1,
      talk : '../assets/sound/hehe.mp3'
    },
    {
      name : 'Dangerous',
      breed : 'European Leon',
      type : 2,
      talk : 'I like giraffe'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  AlertFormSound(animal : Animal) {
    let audio = new Audio(animal.talk);
    audio.play();
  }

}
