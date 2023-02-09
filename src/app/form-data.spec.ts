import { FormData } from './form-data';

describe('FormData', () => {
  it('should create an instance', () => {
    expect(new FormData("sahil",12,"male","mango",12)).toBeTruthy();
  });
});
