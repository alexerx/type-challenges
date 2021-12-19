const o = {
  a: {
    b: 1,
  },
  c: {
    d: {
      e: 1,
    },
    f: 1,
  },
  g: 1,
}

type Expected = ['a', 'a.b', 'c', 'c.d', 'c.d.e', 'c.f', 'g']

type GetValidPath<T> = any
