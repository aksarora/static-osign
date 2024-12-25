import {test, expect} from 'vitest';
import {sum} from './pages/pdf-sign';

test('sum example', () => {
  expect(sum(2, 2)).toBe(4);
});
