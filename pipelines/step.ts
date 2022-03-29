import { ToType, TArg, Args, String, Enum } from "@yuki-js/tinytype";

class _Step<I extends TArg = any> {
  constructor(
    public inArg: I,
    public fn: void | ((args: ToType<I>) => Promise<Step | null>),
    public initialValues: ToType<I>,
    public sync: boolean,
    public pure: boolean
  ) {}
}
export type Step<I extends TArg = any> = _Step<I>;

type StepGenerator<I extends TArg> = (args: ToType<I>) => Step<I>;

type createStepOptions<I extends TArg> = {
  inArg: I;
  fn?: (args: ToType<I>) => Promise<Step | null>;
  sync: boolean;
  pure: boolean;
};

export function createStep<I extends TArg>({
  inArg,
  fn,
  sync,
  pure,
}: createStepOptions<I>): StepGenerator<I> {
  return (initialValues: ToType<I>) =>
    new _Step(inArg, fn, initialValues, sync, pure);
}
