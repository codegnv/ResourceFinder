export function dedupeArray(array: string[]) {
  return array.filter((item: string, index: number) => array.indexOf(item) === index)
}
