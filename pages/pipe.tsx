import * as React from "react";
import Step from "../components/Step";
import { ToType, TArg, Args, String, Enum } from "@yuki-js/tinytype";
import StringInput from "../components/StringInput";
import EnumInput from "../components/EnumInput";

type Step<I extends TArg = TArg> = {
  inArg: I;
  fn: (args: ToType<I>) => Step<any> | null;
  initialValues: ToType<I>;
};

type StepGenerator<I extends TArg> = (args: ToType<I>) => Step<I>;
function createStep<I extends TArg>({
  inArg,
  fn,
}: {
  inArg: I;
  fn: (args: ToType<I>) => Step<any> | null;
}): StepGenerator<I> {
  return (initialValues: ToType<I>) => ({
    inArg,
    fn,
    initialValues,
  });
}

const step0 = createStep({
  inArg: Args(Enum("Hello", ["None", "One", "Two"] as const)),
  fn: (args) => {
    const [type] = args;
    if (type === "None") {
      return null;
    } else if (type === "One") {
      return step1(["world"]);
    } else if (type === "Two") {
      return step2(["world2"]);
    } else {
      return null;
    }
  },
});
const initialStep = step0(["None"]);

const step1 = createStep({
  inArg: Args(String("Hello2")),
  fn: (args) => step2(["World2"]),
});

const step2 = createStep({
  inArg: Args(String("The End")),
  fn: (args) => null,
});

function PipelinePage() {
  if (globalThis !== globalThis.window) {
    return <> </>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [stepState, setStepState] = React.useState<any[][]>([]);

  const steps = [initialStep];
  let i = 0;
  let currentStep = initialStep as Step<any>;
  while (true) {
    if (!stepState[i]) {
      stepState[i] = [currentStep.initialValues];
    }

    const nextStep = currentStep.fn(stepState[i]);
    if (!nextStep) {
      break;
    }
    steps.push(nextStep);
    currentStep = nextStep;
    i++;
  }
  return (
    <>
      {steps.map((step, i) => {
        return (
          <Step key={i} hasNext>
            {step.inArg.map((arg, j) => {
              const type = arg.type as string;
              if (type === "string") {
                return (
                  <StringInput
                    key={j}
                    title={arg.name}
                    value={stepState[i][j]}
                    onChange={(value) => {
                      const newState = stepState.slice(0, i + 1);
                      newState[i][j] = value;
                      setStepState(newState);
                    }}
                  />
                );
              } else if (arg.type === "enum") {
                return (
                  <EnumInput
                    key={i}
                    title={arg.name}
                    variants={arg.variants as unknown as string[]}
                    value={stepState[i][j]}
                    onChange={(value) => {
                      const newState = stepState.slice(0, i + 1);
                      newState[i][j] = value;
                      setStepState(newState);
                    }}
                  />
                );
              }
            })}
          </Step>
        );
      })}
    </>
  );
}

export default PipelinePage;
