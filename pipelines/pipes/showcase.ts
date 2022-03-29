import { Args, Enum, Int32, Nullable, String } from "@yuki-js/tinytype";
import { createPipeline } from "../pipeline";
import { createStep } from "../step";

const step0 = createStep({
  inArg: Args(
    Nullable(Enum("What do you want?", ["Call HTTP API", "Calculate"]))
  ),
  fn: async (args) => {
    const [whatToDo] = args;
    if (whatToDo === "Call HTTP API") {
      const nextStep = createStep({
        inArg: Args(
          Enum("What HTTP method?", ["GET", "POST", "PUT", "DELETE"]),
          String("URL")
        ),
        fn: async (args) => {
          const [method, url] = args;
          const result = await fetch(url, { method });
          const asText = await result.text();
          return createStep({
            inArg: Args(String("Result")),
            sync: false,
            pure: true,
          })([asText]);
        },
        sync: false,
        pure: true,
      });
      return nextStep(["GET", "https://example.com"]);
    } else if (whatToDo === "Calculate") {
      return createStep({
        inArg: Args(Int32("left"), Int32("right")),
        fn: async (args) => {
          const [left, right] = args;
          return createStep({
            inArg: Args(Int32("What is the result?")),
            sync: true,
            pure: true,
          })([left + right]);
        },
        sync: true,
        pure: true,
      })([1, 2]);
    } else {
      return null;
    }
  },
  sync: true,
  pure: true,
});

export default createPipeline({
  id: "showcase",
  displayName: "Showcase",
  initialStep: step0([null]),
});
