import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'ryan-perlman', firstName: 'Ryan', lastName: 'Perlman'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'ryan-perlman', text: 'Ryan Perlman'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
