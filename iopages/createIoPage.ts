import { ToType, TArg } from "@yuki-js/tinytype";

type RemoteFunction<I extends TArg, O extends TArg> = (
  ...args: ToType<I>
) => Promise<Readonly<ToType<O>>>;

export interface RemoteProc<I extends TArg, O extends TArg, Id extends string>
  extends RemoteFunction<I, O> {
  inArg: I;
  outArg: O;
  id: Id;
  displayName: string;
  sync: boolean;
}

export function createIoPage<
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
}): RemoteProc<I, O, Id> {
  const remoteFunc = (...a: ToType<I>) => func(...a);
  remoteFunc.inArg = inArg;
  remoteFunc.outArg = outArg;
  remoteFunc.id = id;
  remoteFunc.displayName = displayName;
  remoteFunc.sync = sync;
  return remoteFunc;
}
