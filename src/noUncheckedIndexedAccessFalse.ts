const foo: number[] = []

foo.push(1, 2, 3, 4)

// this file should not complain and apply "noUncheckedIndexedAccess": false
const bar: number = foo[1]

console.log(bar)