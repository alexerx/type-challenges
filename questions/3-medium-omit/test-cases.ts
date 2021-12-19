import { Equal, Expect } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

type MyOmit<T, U extends keyof any> = {
  [P in keyof T as P extends U ? never : P]: T[P]
}

/**
 * 映射类型，as 键的重映射
 * 这里无效的键充映射为never
 */

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]
