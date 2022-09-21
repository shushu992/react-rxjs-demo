/**
 * 维护todo相关业务的数据
 */
import { Observable, of, startWith, Subject, switchMap, tap } from 'rxjs';
import { Todo } from '../todo-definition';
import { ApiService } from '../../service/api-service';

const INIT_ITEM = { id: 1, created: '9/20/2022, 3:43:37 PM', content: 'here is the content' };

export class TodoService {

  private readonly apiService = new ApiService();

  /**
   * 模拟服务器上的数据
   * @private
   */
  private items: Todo[] = [ INIT_ITEM ];
  private id = 2;

  private readonly dirty$ = new Subject<void>();

  /**
   * 跟踪todo项目列表数据
   * 每当add或者remove时, 从服务器获取最新的列表, 然后发出消息
   */
  watch(): Observable<Todo[]> {
    return this.dirty$
      .pipe(startWith(void 0))
      .pipe(switchMap(() => of(this.items.concat())));
  }

  /**
   * 调用API, 增加一个todo项目
   *
   * @param content
   */
  add(content: string): void {
    const newItem = {
      id: this.id++,
      created: new Date().toLocaleString(),
      content: content
    };

    this.items.push(newItem); // 使用本地变量模拟API
    this.apiService.request<void>('add', { item: newItem })
      .pipe(tap(() => this.markDirty()))
      .subscribe();
  }

  /**
   * 调用API, 删除一个todo项目
   *
   * @param id
   */
  remove(id: number): void {
    const idx = this.items.findIndex(item => item.id === id);
    if (idx < 0) {
      return;
    }

    this.items.splice(idx, 1); // 使用本地变量模拟API
    this.apiService.request<void>('remove', { id: id })
      .pipe(tap(() => this.markDirty()))
      .subscribe();
  }

  private markDirty(): void {
    this.dirty$.next(void 0);
  }
}
