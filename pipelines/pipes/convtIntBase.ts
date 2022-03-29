import { Args, Int64, Nullable, String } from "@yuki-js/tinytype";
import { createIoPipeline } from "../io";

export default createIoPipeline({
  id: "convIntBase",
  displayName: "Convert Integer Base",
  sync: true,
  inArg: Args(Int64("Decimal")),
  outArg: Args(String("Hexadecimal"), String("Binary"), String("Octal")),
  fn: async (decimal) => {
    decimal ??= BigInt(0);
    return [
      decimal.toString(16),
      decimal.toString(2),
      decimal.toString(8),
    ] as const;
  },
});
