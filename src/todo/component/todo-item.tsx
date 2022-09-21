import { Todo } from "../todo-definition";

interface Props {
  todo: Todo;
  onDeleteClick: (item: Todo) => any;
}

export function TodoItem(props: Props) {
  return <p>
    <span data-testid="todo-id">{ props.todo.id }</span>&nbsp;|&nbsp;
    <span data-testid="todo-created">{ props.todo.created }</span>&nbsp;|&nbsp;
    <span data-testid="todo-content">{ props.todo.content }</span>&nbsp;|&nbsp;
    <button data-testid="todo-button" onClick={ () => props.onDeleteClick(props.todo) }>Delete</button>
  </p>
}
