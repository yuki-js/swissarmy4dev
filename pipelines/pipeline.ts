import { Step } from "./step";

type CreatePipelineOptions<Id extends string> = {
  id: Id;
  displayName: string;
  initialStep: Step;
};

class Pipeline<Id extends string> {
  constructor(
    public id: Id,
    public displayName: string,
    public initialStep: Step
  ) {}
}
export function createPipeline<Id extends string>({
  id,
  displayName,
  initialStep,
}: CreatePipelineOptions<Id>) {
  return new Pipeline(id, displayName, initialStep);
}
