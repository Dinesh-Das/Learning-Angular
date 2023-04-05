import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.todo = new Todo(
      3,
      "Title3",
      "Description",
      true,
    );
  }
  ngOnInit(): void {

  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);

    console.log("Onclick has been triggered")
  }
  onCheckboxClick(todo: Todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
    console.log(todo)
  }
}
