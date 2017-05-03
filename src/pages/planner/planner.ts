import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

import {TodoService} from '../../providers/todo-service';
import {Todo} from '../../providers/todo';

@Component({
	selector: 'page-planner',
	templateUrl: 'planner.html',
	providers: [TodoService]
})

export class PlannerPage {
	public todos: Todo[];

	constructor(public todoService: TodoService) {
		this.loadTodos();
	}
    loadTodos() {
	    this.todoService.load()
			.subscribe(data => {
				this.todos = data;
        	})
  }
}
