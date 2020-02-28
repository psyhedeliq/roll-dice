import { getDice } from './get-dice';

describe('roll dice', () => {
  it('should return the rolled the dice', () => {
    const result = getDice();
    const areAllNumbers =
      result.filter(num => typeof num === 'number').length === result.length;
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toEqual(3);
    expect(areAllNumbers).toBe(true);
  });
});
