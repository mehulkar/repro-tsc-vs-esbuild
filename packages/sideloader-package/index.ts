import { foo } from "@internal/with-dep-package";

console.log(foo);

export function sideloaderMain() {
  return "sideloaderMain";
}
