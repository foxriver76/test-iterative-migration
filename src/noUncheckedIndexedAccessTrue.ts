const foo: number[] = []

foo.push(1, 2, 3, 4)

// this file should complain and apply "noUncheckedIndexedAccess": true
const bar: number = foo[1]

console.log(bar)