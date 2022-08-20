import { IDepartment, IProgram, ICriteria } from 'src/components/Results/types'

export function dedupeArray(array: Array<string> | undefined) {
  if (!array) return undefined
  return array.filter((item: string, index: number) => array.indexOf(item) === index)
}

export function getNames(arr: Array<IDepartment | IProgram | ICriteria> | undefined) {
  return dedupeArray(arr?.map(item => item.name))
}
