import showcase from "./pipes/showcase";

export const pages = [showcase] as const;

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
