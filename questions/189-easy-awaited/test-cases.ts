import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type MyAwaited<T extends Promise<any>> = T extends Promise<infer Item> ? Item extends Promise<any> ? MyAwaited<Item> : Item : never

/**
 * 递归调用
 */

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
