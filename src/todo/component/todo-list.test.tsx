import { fireEvent, render, screen } from '@testing-library/react';
import { TodoList } from './todo-list';

it('渲染列表', async () => {
  render(<TodoList/>);

  const content = 'random string ...';

  const input = screen.getByTestId('todo-input') as HTMLInputElement;
  fireEvent.change(input, { target: { value: content } });
  expect(input.value).toBe(content);

  const btnAdd = screen.getByTestId('todo-button-add');
  fireEvent.click(btnAdd);
  expect(screen.getByText(content)).toBeTruthy();
});
