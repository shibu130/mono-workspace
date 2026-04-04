import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
 {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
 // @ts-ignore      // ts or editordoesnt know where mfeApp
    // remote/modulename
    // TodoList should match the key in the mfe-app webpackconfig exposes
 import("mfeApp/TodoList") // exact key
  .then(e => e.TodoListModule)
  }];
