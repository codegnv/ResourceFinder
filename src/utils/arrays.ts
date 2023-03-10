import { IDepartment, IProgram, ICriteria } from 'src/components/Results/types'

export function dedupeArray(array: Array<string> | undefined) {
  if (!array) return undefined
  return array.filter((item: string, index: number) => array.indexOf(item) === index)
}

export function getNames(arr: Array<IDepartment | IProgram | ICriteria> | undefined) {
  return dedupeArray(arr?.map(item => item.name))
}

export const partition = <T extends unknown>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean
) => {
  return array.reduce(
    function (result: any[], element, i) {
      callback(element, i, array) ? result[0].push(element) : result[1].push(element)

      return result
    },
    [[], []]
  )
}
