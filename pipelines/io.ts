import { ToType, TArg } from "@yuki-js/tinytype";
import { createPipeline } from "./pipeline";
import { createStep } from "./step";

type RemoteFunction<I extends TArg, O extends TArg> = (
  ...args: ToType<I>
) => Promise<Readonly<ToType<O>>>;

export function createIoPipeline<
  I extends TArg,
  O extends TArg,
  Id extends string
>({
  id,
  displayName,
  inArg,
  outArg,
  fn: func,
  sync = false,
}: {
  id: Id;
  displayName: string;
  inArg: I;
  outArg: O;
  fn: RemoteFunction<I, O>;
  sync?: boolean;
}) {
  const defaultArgs: any = inArg.map((primitive: any) => {
    if ("nullable" in primitive) {
      return null;
    }
    switch (primitive.type) {
      case "string":
        return "";
      case "int32":
        return 0;
      case "int64":
        return BigInt(0);
      case "bytes":
        throw new Error("bytes not implemented");
      case "boolean":
        return false;
      case "enum":
        return primitive.variants[0];
      default:
        throw new Error(`unknown primitive type ${primitive.type}`);
    }
  });
  const initialStep = createStep({
    inArg,
    fn: async (args: ToType<I>) => {
      const result = await func(...args);
      return createStep({
        inArg: outArg,
        sync,
        pure: true,
      })(result);
    },
    sync,
    pure: true,
  })(defaultArgs);
  const pipeline = createPipeline({
    id: id,
    displayName: displayName,
    initialStep,
  });
  return pipeline;
}
