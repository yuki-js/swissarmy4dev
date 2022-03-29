/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import Step from "../../components/Step";
import { ToType, TArg, Args, String, Enum } from "@yuki-js/tinytype";
import StringInput from "../../components/StringInput";
import EnumInput from "../../components/EnumInput";
import { pageMap, pages } from "../../pipelines";
import { Step as StepType } from "../../pipelines/step";
import { useRouter } from "next/router";
import IntInput from "../../components/IntInput";
import BooleanInput from "../../components/BooleanInput";

export async function getStaticPaths() {
  const paths = pages.map((page) => {
    return {
      params: {
        id: page.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }: any): any {
  const page = pageMap[params.id];
  if (!page) {
    throw new Error(`Page ${params.id} not found`);
  }
  return {
    props: {
      id: page.id,
    },
  };
}

function PipelinePage() {
  if (globalThis !== globalThis.window) {
    return <> </>;
  }

  const router = useRouter();
  const page = pageMap[router.query?.id?.toString() ?? "404"];
  const initialStep = page.initialStep;

  const [steps, setSteps] = React.useState<
    {
      step: StepType<TArg>;
      state: any[];
    }[]
  >([
    {
      step: initialStep,
      state: initialStep.initialValues,
    },
  ]);
  const runStep = React.useCallback(
    async (stepIndex: number) => {
      const currentStep = steps[stepIndex];

      if (!currentStep.step.fn) {
        return;
      }
      const nextStep = await currentStep.step.fn(currentStep.state);
      if (!nextStep) {
        return;
      }
      setSteps((steps) => {
        const newSteps = [...steps];
        newSteps[stepIndex + 1] = {
          step: nextStep,
          state: nextStep.initialValues,
        };
        return newSteps;
      });
    },
    [steps]
  );

  React.useEffect(() => {
    const lastStepIndex = steps.length - 1;
    const lastStep = steps[lastStepIndex];

    if (lastStep.step.sync) {
      runStep(lastStepIndex);
    }
  }, [runStep, steps]);

  const updateState = (value: any, i: number, j: number) => {
    setSteps((steps) => {
      const newSteps = steps.slice(0, i + 1);
      newSteps[i].state[j] = value;
      return newSteps;
    });
  };
  return (
    <>
      {steps.map(({ step, state }, i) => {
        return (
          <Step
            key={i}
            hasNext={!step.sync && !!step.fn}
            execute={{ onClick: () => runStep(i) }}
          >
            {step.inArg.map((arg, j) => {
              if (arg.type === "string") {
                return (
                  <StringInput
                    key={j}
                    title={arg.name}
                    value={state[j]}
                    onChange={(e) => updateState(e, i, j)}
                  />
                );
              } else if (arg.type === "int32") {
                return (
                  <IntInput
                    key={j}
                    title={arg.name}
                    value={BigInt(state[j] ?? 0)}
                    onChange={(e) => updateState(Number(e), i, j)}
                  />
                );
              } else if (arg.type === "int64") {
                return (
                  <IntInput
                    key={j}
                    title={arg.name}
                    value={state[j] ?? BigInt(0)}
                    onChange={(e) => updateState(e, i, j)}
                  />
                );
              } else if (arg.type === "enum") {
                return (
                  <EnumInput
                    key={j}
                    title={arg.name}
                    variants={(arg as any).variants}
                    value={state[j]}
                    onChange={(e) => updateState(e, i, j)}
                  />
                );
              } else if (arg.type === "boolean") {
                return (
                  <BooleanInput
                    key={j}
                    title={arg.name}
                    value={state[j]}
                    onChange={(e) => updateState(e, i, j)}
                  />
                );
              } else {
                return (
                  <StringInput
                    key={j}
                    value={`type ${arg.type} Not implemented`}
                    disabled
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
