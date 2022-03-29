import ascii2hex from "./pipes/ascii2hex";
import convtIntBase from "./pipes/convtIntBase";
import deployEthereumContract from "./pipes/deployEthereumContract";
import newParams from "./pipes/newParams";
import nonpureTest from "./pipes/nonpureTest";
import showcase from "./pipes/showcase";

export const pages = [
  showcase,
  ascii2hex,
  convtIntBase,
  deployEthereumContract,
  newParams,
  nonpureTest,
] as const;

export const pageMap = pages.reduce(
  (acc, page) => {
    return {
      ...acc,
      [page.id]: page,
    };
  },
  {} as {
    [_: string]: typeof pages[number];
  }
);
