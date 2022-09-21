import { TodoItem } from './todo-item';
import { bind } from '@react-rxjs/core';
import { TodoService } from '../service/todo-service';
import { useState } from 'react';
import { Todo } from '../todo-definition';

const todoService = new TodoService();
const [ useItems, items$ ] = bind(todoService.watch(), []);

export function TodoList() {
  const items = useItems();

  const [ content, setContent ] = useState('');
  const add = () => {
    if (content.trim().length === 0) {
      return;
    }

    todoService.add(content.trim());
    setContent('');
  };
  const remove = (item: Todo) => {
    todoService.remove(item.id);
  };

  return <div>
    <input data-testid="todo-input" placeholder="content" value={ content } onChange={ event => setContent(event.target.value) }/>
    <button data-testid="todo-button-add" onClick={ add }>Add</button>

    { items.map(item => <TodoItem key={ item.id } todo={ item } onDeleteClick={ remove }/>) }
  </div>
}
