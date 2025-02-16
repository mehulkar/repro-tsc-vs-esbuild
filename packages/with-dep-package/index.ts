import deepEqual from "fast-deep-equal";

export function foo() {
  console.log(deepEqual({}, {}));
}
