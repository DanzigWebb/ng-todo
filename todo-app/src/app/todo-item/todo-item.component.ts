import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  @Input() todo;
  @Output() toggleDone = new EventEmitter();
  @Output() del = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  

}
