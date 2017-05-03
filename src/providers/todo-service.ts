import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Todo} from '../providers/todo';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class TodoService {

	todosUrl = "/api/todos";

	constructor(public http: Http) {
		console.log('Hello TodoService Provider');
	}

	// Get all todos
	load(): Observable<Todo[]> {
	    return this.http.get(this.todosUrl)
	             .map(res => res.json())
	             .catch(this.handleError);
	}

	handleError(error) {
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	}

}
