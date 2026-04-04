import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule, RouterModule.forChild([{path:"", pathMatch:"full", component:TodoListComponent}])
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
