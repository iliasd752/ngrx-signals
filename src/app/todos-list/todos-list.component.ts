import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {TodosStore} from "../store/todos.store";

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSelectionList,
    MatListOption,
    MatLabel
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {

  store = inject(TodosStore);

  async onAddTodo(title: string) {

    await this.store.addTodo(title);
  }
}
