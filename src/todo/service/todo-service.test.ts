import { TodoService } from './todo-service';
import { firstValueFrom } from 'rxjs';

it('TodoService', async () => {
  const todoService = new TodoService();

  const content = 'random string ...';
  todoService.add(content);

  const exists = (await firstValueFrom(todoService.watch()))
    .find(item => item.content === content);
  expect(exists).toBeTruthy();

  // @ts-ignore
  todoService.remove(exists.id);

  const exists2 = (await firstValueFrom(todoService.watch()))
    .find(item => item.content === content);
  expect(exists2).toBeFalsy();
});
