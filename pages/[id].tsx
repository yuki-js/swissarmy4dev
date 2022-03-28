import { ScreenVariantProvider } from "../components/plasmic/swissarmy_4_dev/PlasmicGlobalVariant__Screen";
import { PlasmicIo } from "../components/plasmic/swissarmy_4_dev/PlasmicIo";

import { useRouter } from "next/router";
import * as React from "react";
import IoPage from "../components/IoPage";
import StringInput from "../components/StringInput";
import { pageMap, pages } from "../iopages";
import SidebarItem from "../components/SidebarItem";
import IntInput from "../components/IntInput";

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

function GeneralIo() {
  const router = useRouter();
  const page = pageMap[router.query?.id?.toString() ?? "404"];

  const [inArgValues, setInArgValues] = React.useState<any[]>([]);
  const updateInArgValues = React.useCallback(
    (index: number, value: any) => {
      setInArgValues((inArgValues) => {
        const newInArgValues = [...inArgValues];
        newInArgValues[index] = value;
        return newInArgValues;
      });
    },
    [setInArgValues]
  );

  const inputs = (
    <>
      {page.inArg.map((arg, i) => {
        const type = arg.type as string;
        if (type === "string") {
          return (
            <StringInput
              key={i}
              title={arg.name}
              value={inArgValues[i]}
              onChange={(e) => updateInArgValues(i, e)}
            />
          );
        } else if (type === "int32") {
          return (
            <IntInput
              key={i}
              title={arg.name}
              value={BigInt(inArgValues[i] ?? "0")}
              onChange={(e) => updateInArgValues(i, Number(e))}
            />
          );
        } else if (type === "int64") {
          return (
            <IntInput
              key={i}
              title={arg.name}
              value={inArgValues[i] ?? BigInt(0)}
              onChange={(e) => updateInArgValues(i, e)}
            />
          );
        } else {
          return (
            <StringInput
              key={i}
              value={`type ${arg.type} Not implemented`}
              disabled
            />
          );
        }
      })}
    </>
  );

  const [outArgValues, setOutArgValues] = React.useState<any[]>([]);
  const execute = React.useCallback(async () => {
    const result = await (page as any).apply(null, inArgValues);

    setOutArgValues(result);
  }, [inArgValues, page, setOutArgValues]);
  const outputs = React.useMemo(
    () => (
      <>
        {page.outArg.map((arg, i) => {
          const type = arg.type as string;
          if (type === "string") {
            return (
              <StringInput
                key={i}
                title={arg.name}
                value={outArgValues[i]}
                disabled
              />
            );
          } else if (type === "int32") {
            return (
              <IntInput
                key={i}
                title={arg.name}
                value={BigInt(outArgValues[i] ?? "0")}
                disabled
              />
            );
          } else if (type === "int64") {
            return (
              <IntInput
                key={i}
                title={arg.name}
                value={outArgValues[i] ?? BigInt(0)}
                disabled
              />
            );
          } else {
            return (
              <StringInput
                key={i}
                value={`type ${arg.type} Not implemented`}
                disabled
              />
            );
          }
        })}
      </>
    ),
    [outArgValues, page.outArg]
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (!page.sync) {
      return;
    }
    execute();
  }, [execute, inArgValues, page.sync]);

  const sidebar = pages.map((p, i) => (
    <SidebarItem key={i} to={`/${p.id}`} active={p.id === page.id}>
      {p.displayName}
    </SidebarItem>
  ));

  return (
    <PlasmicIo sidebar={sidebar}>
      <IoPage
        inputs={inputs}
        outputs={outputs}
        execute={{
          onClick: execute,
        }}
      />
    </PlasmicIo>
  );
}

export default GeneralIo;
