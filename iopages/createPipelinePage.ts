import { ToType, TArg, Args } from "@yuki-js/tinytype";

type Step<I extends TArg = TArg> = {
  /**
   * If true, the step goes without clicking "next" button.
   * Set false if XHR or other async/heavy operation is needed.
   */
  sync: boolean;
  /**
   * If true, the step has no critical side-effect and can be reverted.
   */
  pure: true;
  fn: <O extends TArg = TArg>(
    types: I,
    values: ToType<I>
  ) => Promise<{
    types: O; // argument type
    values: ToType<O>; // default value or return value
    next: Step<O>;
  }>;
};

const initialStepArg = Args();
class PipelinePage {
  initialStep: Step<ToType<typeof initialStepArg>>;
  constructor(initialStep: Step<ToType<typeof initialStepArg>>) {
    this.initialStep = initialStep;
  }
}
