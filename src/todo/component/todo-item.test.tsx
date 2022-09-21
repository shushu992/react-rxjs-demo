import { TodoItem } from './todo-item';
import { Todo } from '../todo-definition';
import { fireEvent, render, screen } from '@testing-library/react';

it('渲染文本和按钮', async () => {
  const todo: Todo = { id: 1, created: 'a', content: 'b' };
  const onDeleteClick = jest.fn();
  render(<TodoItem todo={ todo } onDeleteClick={ onDeleteClick }/>);

  expect(screen.getByTestId('todo-id').textContent).toBe(`${ todo.id }`);
  expect(screen.getByTestId('todo-created').textContent).toBe(`${ todo.created }`);
  expect(screen.getByTestId('todo-content').textContent).toBe(`${ todo.content }`);

  fireEvent.click(screen.getByTestId('todo-button'));
  expect(onDeleteClick).toBeCalledTimes(1);
});
