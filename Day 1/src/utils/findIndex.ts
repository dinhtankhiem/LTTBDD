export function findIndex<T>(array: T[], predicate: (item: T) => boolean): number {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i; // Trả về vị trí đầu tiên thỏa điều kiện
    }
  }
  return -1; // Trả về -1 nếu không tìm thấy
}