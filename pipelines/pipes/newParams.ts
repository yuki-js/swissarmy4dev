import { Args, Enum, Int64, Boolean, String } from "@yuki-js/tinytype";
import { createIoPipeline } from "../io";

export default createIoPipeline({
  id: "newParams",
  displayName: "New Params Showcase",
  sync: true,
  inArg: Args(Enum("Which do you like", ["A", "B", "C"]), Boolean("Really?")),
  outArg: Args(
    Enum("So, you like", ["A", "B", "C"]),
    Boolean("Really?"),
    Int64("How many?"),
    String("What?")
  ),
  fn: async (like, really) => {
    return [like, really, BigInt(4), "w"] as const;
  },
});
