import { Equal, Expect } from '@type-challenges/utils'

// type First<T extends any[]> = T[0] extends never ? never : T[0]
type First<T extends any[]> = T[number] extends never ? never : T[0]

/**
 * T为数组或元祖类型时，T[number]即T[keyof T]即所有item值的类型的集合
 * T[number] extends never ? 可用于判断T是否为空
 */

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]
