import { StatusCodeInterceptor } from './status-code.interceptor';

describe('StatusCodeInterceptor', () => {
  it('should be defined', () => {
    expect(new StatusCodeInterceptor()).toBeDefined();
  });
});
