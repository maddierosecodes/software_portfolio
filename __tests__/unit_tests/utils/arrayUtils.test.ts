import { groupArrayIntoChunks } from '../../../utils/arrayUtils';

describe('Array utility functions', () => {
  describe('groupArrayIntoChunks', () => {
    it('should group array into chunks of specified size', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const result = groupArrayIntoChunks(array, 3);
      expect(result).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    });

    it('should handle arrays that do not divide evenly', () => {
      const array = [1, 2, 3, 4, 5];
      const result = groupArrayIntoChunks(array, 3);
      expect(result).toEqual([
        [1, 2, 3],
        [4, 5],
      ]);
    });

    it('should handle chunk size of 1', () => {
      const array = [1, 2, 3];
      const result = groupArrayIntoChunks(array, 1);
      expect(result).toEqual([[1], [2], [3]]);
    });

    it('should handle chunk size larger than array', () => {
      const array = [1, 2, 3];
      const result = groupArrayIntoChunks(array, 5);
      expect(result).toEqual([[1, 2, 3]]);
    });

    it('should handle empty array', () => {
      const array: number[] = [];
      const result = groupArrayIntoChunks(array, 3);
      expect(result).toEqual([]);
    });
  });
});
