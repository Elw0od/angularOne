import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

import {Animal} from '../interface/animal.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  spencies = 'Cat';

  @Input() catInput : Animal;
  @Output() onCatMiaouEvent : EventEmitter<Animal> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  miaou() {
    this.onCatMiaouEvent.emit(this.catInput)
  }

}
