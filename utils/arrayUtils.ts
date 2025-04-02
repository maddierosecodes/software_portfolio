/**
 * Groups an array into chunks of specified size
 * @param array The array to be chunked
 * @param chunkSize The size of each chunk
 * @returns An array of arrays, where each inner array has size chunkSize (except possibly the last one)
 */
export const groupArrayIntoChunks = <T>(
  array: T[],
  chunkSize: number,
): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};
