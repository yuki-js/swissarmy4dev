import { ToType, TArg } from "@yuki-js/tinytype";

type Step = {
  sync: boolean;
  fn: <I extends TArg, O extends TArg>(
    ctx: Context,
    types: I,
    values: ToType<I>
  ) => Promise<
    [
      O, // argument type
      ToType<O> // default value or return value
    ]
  >;
};
type Property = {
  id: string;
  displayName: string;
  init(): Promise<TArg>;
  steps: Array<Step>;
};

class PipelinePage<Id extends string> {
  constructor(
    public id: Id,
    public displayName: string,
    private _init: () => Promise<TArg>,
    private _steps: Array<Step>
  ) {}
}
export function createPipelinePage<Id extends string>(prop: Property<Id>) {
  return {
    id: prop.id,
    displayName: prop.displayName,
    init: prop.init,
    steps: prop.steps,
  };
}

class Context {}
