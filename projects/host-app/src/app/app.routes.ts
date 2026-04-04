import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {path:"", pathMatch:'full', component:TodoListComponent}
];
