import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-communication',
  templateUrl: './child-communication.component.html',
  styleUrls: ['./child-communication.component.css']
})
export class ChildCommunicationComponent implements OnInit {
  @Input('who') who: string;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.who);
  }

  onClick() {
    const change = ['uppcase', 'lowcase', 'titlecase'];
    const index = Math.floor(Math.random() * 3);
    this.change.emit(change[index]);
  }

}
