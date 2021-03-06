import { Args, Nullable, String } from "@yuki-js/tinytype";
import { createIoPipeline } from "../io";

export default createIoPipeline({
  id: "ascii2hex",
  displayName: "String to hex string",
  sync: true,
  inArg: Args(String("String")),
  outArg: Args(String("Hexadecimal string")),
  fn: async (ascii) => {
    try {
      return [Buffer.from(ascii).toString("hex")] as const;
    } catch (e) {
      return [""] as const;
    }
  },
});
