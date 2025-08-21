import { RequestTimerMiddleware } from './request-timer.middleware';

describe('RequestTimerMiddleware', () => {
  it('should be defined', () => {
    expect(new RequestTimerMiddleware()).toBeDefined();
  });
});
