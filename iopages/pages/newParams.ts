import { Args, Enum, Int64, Boolean, String } from "@yuki-js/tinytype";
import { createIoPage } from "../createIoPage";

export default createIoPage({
  id: "newParams",
  displayName: "New Params Showcase",
  sync: true,
  inArg: Args(Enum("Which do you like", ["A", "B", "C"]), Boolean("Really?")),
  outArg: Args(Enum("So, you like", ["A", "B", "C"]), Boolean("Really?")),
  fn: async (like, really) => {
    return [like, really] as const;
  },
});
