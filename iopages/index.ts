import ascii2hex from "./pages/ascii2hex";
import convtIntBase from "./pages/convtIntBase";
import deployEthereumContract from "./pages/deployEthereumContract";
export const pages = [deployEthereumContract, ascii2hex, convtIntBase] as const;

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
