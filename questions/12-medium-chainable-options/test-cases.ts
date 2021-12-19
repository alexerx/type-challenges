import { Alike, Expect } from '@type-challenges/utils'

type Chainable<T = Record<string, unknown>> = {
  option<K extends keyof T, V extends T[K]>(key: K, value: V): Chainable<T>
  get(): T
}

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [
  Expect<Alike<typeof result, Expected>>
]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}
