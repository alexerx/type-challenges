import { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

type GetReadonlyKeys<T> = keyof {
  [P in keyof T as Equal<{ [AssertionKey in P]: T[AssertionKey] }, { readonly [AssertionKey in P]: T[AssertionKey] }> extends true ? P : never]: T[P]
}

/**
 * as，键的重映射
 * [P in keyof T]，这里的P包括可变性、可选性、key值
 * {readonly a: string}与{a: string}是不等的
 * todo: [AssertionKey in P]?
 */

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]
