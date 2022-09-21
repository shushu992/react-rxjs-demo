import { ApiService } from './api-service';
import { Observable } from 'rxjs';

it('ApiService', () => {
  const apiService = new ApiService();

  const req = apiService.request('/path', { k: 'v' });
  expect(req).toBeInstanceOf(Observable);
});
