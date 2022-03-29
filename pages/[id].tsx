import * as React from "react";
import Step from "../components/Step";
import { TArg } from "@yuki-js/tinytype";
import StringInput from "../components/StringInput";
import EnumInput from "../components/EnumInput";
import { pageMap, pages } from "../pipelines";
import { Step as StepType } from "../pipelines/step";
import { useRouter } from "next/router";
import IntInput from "../components/IntInput";
import BooleanInput from "../components/BooleanInput";
import PlasmicIo from "../components/plasmic/swissarmy_4_dev/PlasmicIo";
import SidebarItem from "../components/SidebarItem";

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
  const router = useRouter();
  const page = pageMap[router.query?.id?.toString() ?? "404"];
  const initialStep = page.initialStep;

  const [loading, setLoading] = React.useState(false);
  const [steps, setSteps] = React.useState<
    {
      step: StepType<TArg>;
      state: any[];
      locked: boolean;
    }[]
  >([
    {
      step: initialStep,
      state: initialStep.initialValues,
      locked: false,
    },
  ]);

  React.useEffect(() => {
    setSteps([
      {
        step: initialStep,
        state: initialStep.initialValues,
        locked: false,
      },
    ]);
  }, [initialStep]);
  const runStep = React.useCallback(
    async (stepIndex: number) => {
      setLoading(true);
      const currentStep = steps[stepIndex];

      if (!currentStep.step.fn) {
        return;
      }
      let nextStep: StepType<TArg>;
      try {
        const _next = await currentStep.step.fn(currentStep.state);
        if (!_next) {
          return;
        }
        nextStep = _next;
      } catch (e) {
        console.error(e);
        setLoading(false);
        return;
      }
      setSteps((steps) => {
        const newSteps = steps.slice(0, stepIndex + 1).map((s) => {
          s.locked = !currentStep.step.pure || s.locked;
          return s;
        });
        newSteps.push({
          step: nextStep,
          state: nextStep.initialValues,
          locked: false,
        });

        return newSteps;
      });
      setLoading(false);
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
  const sidebar = pages.map((p, i) => (
    <SidebarItem key={i} to={`/${p.id}`} active={p.id === page.id}>
      {p.displayName}
    </SidebarItem>
  ));
  return (
    <PlasmicIo sidebar={sidebar}>
      {steps.map(({ step, state, locked }, i) => (
        <Step
          key={i}
          hasNext={!step.sync && !!step.fn && !locked}
          execute={{ onClick: () => runStep(i) }}
          loading={loading}
        >
          {step.inArg.map((arg, j) => {
            if (arg.type === "string") {
              return (
                <StringInput
                  key={j}
                  title={arg.name}
                  value={state[j]}
                  disabled={!step.fn || locked}
                  onChange={(e) => updateState(e, i, j)}
                />
              );
            } else if (arg.type === "int32") {
              return (
                <IntInput
                  key={j}
                  title={arg.name}
                  value={BigInt(state[j] ?? 0)}
                  disabled={!step.fn || locked}
                  onChange={(e) => updateState(Number(e), i, j)}
                />
              );
            } else if (arg.type === "int64") {
              return (
                <IntInput
                  key={j}
                  title={arg.name}
                  value={state[j] ?? BigInt(0)}
                  disabled={!step.fn || locked}
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
                  disabled={!step.fn || locked}
                  onChange={(e) => updateState(e, i, j)}
                />
              );
            } else if (arg.type === "boolean") {
              return (
                <BooleanInput
                  key={j}
                  title={arg.name}
                  value={state[j]}
                  disabled={!step.fn || locked}
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
      ))}
    </PlasmicIo>
  );
}

export default PipelinePage;
