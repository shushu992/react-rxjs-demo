/**
 * 这里封装http api, 供别的service调用
 */
import { Observable, of } from "rxjs";

export class ApiService {

  request<R>(path: string, body?: object): Observable<R> {
    return of(void 0) as Observable<R>; // 假装有后端
  }

}
