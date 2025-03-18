import { it, describe, expect} from 'vitest';
import { getRandomInt } from './randomNumber';

describe('getRandomInt', () => {
  it('Returns a number', () => {
    expect(getRandomInt(10)).toBeTypeOf("number")  
  });
});