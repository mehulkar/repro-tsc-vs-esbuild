import { sideloaderMain } from "@internal/sideloader-package";
import fastDeepEqual from "fast-deep-equal";

export function foo() {
  console.log(sideloaderMain);
  return fastDeepEqual({}, {});
}
