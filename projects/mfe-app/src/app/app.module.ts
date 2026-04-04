import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from "@angular/router";
import { routes } from './app.routes';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterOutlet, RouterModule.forRoot(routes), TodoListModule],
  bootstrap: [AppComponent],
})
export class AppModule {}