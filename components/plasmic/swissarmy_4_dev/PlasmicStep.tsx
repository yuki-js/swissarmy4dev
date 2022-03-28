// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3sWsabkqMN5rF9tgqCnVDh
// Component: mOauKsDZOO
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Container from "../../Container"; // plasmic-import: FlU_PKfwwn/component
import Button from "../../Button"; // plasmic-import: EGFnv4IDIWK-5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_swissarmy_4_dev.module.css"; // plasmic-import: 3sWsabkqMN5rF9tgqCnVDh/projectcss
import sty from "./PlasmicStep.module.css"; // plasmic-import: mOauKsDZOO/css

export type PlasmicStep__VariantMembers = {
  hasNext: "hasNext";
};

export type PlasmicStep__VariantsArgs = {
  hasNext?: SingleBooleanChoiceArg<"hasNext">;
};

type VariantPropType = keyof PlasmicStep__VariantsArgs;
export const PlasmicStep__VariantProps = new Array<VariantPropType>("hasNext");

export type PlasmicStep__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicStep__ArgsType;
export const PlasmicStep__ArgProps = new Array<ArgPropType>("children");

export type PlasmicStep__OverridesType = {
  root?: p.Flex<typeof Container>;
  execute?: p.Flex<typeof Button>;
};

export interface DefaultStepProps {
  children?: React.ReactNode;
  hasNext?: SingleBooleanChoiceArg<"hasNext">;
  className?: string;
}

function PlasmicStep__RenderFunc(props: {
  variants: PlasmicStep__VariantsArgs;
  args: PlasmicStep__ArgsType;
  overrides: PlasmicStep__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <Container
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__eZfgr, {
          [sty.freeBoxhasNext__eZfgRnrMgu]: hasVariant(
            variants,
            "hasNext",
            "hasNext"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__fRjAy)}>
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>

        {(hasVariant(variants, "hasNext", "hasNext") ? true : true) ? (
          <Button
            data-plasmic-name={"execute"}
            data-plasmic-override={overrides.execute}
            className={classNames("__wab_instance", sty.execute, {
              [sty.executehasNext]: hasVariant(variants, "hasNext", "hasNext")
            })}
          >
            {"Execute"}
          </Button>
        ) : null}
      </div>
    </Container>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "execute"],
  execute: ["execute"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof Container;
  execute: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStep__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStep__VariantsArgs;
    args?: PlasmicStep__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStep__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicStep__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicStep__ArgProps,
      internalVariantPropNames: PlasmicStep__VariantProps
    });

    return PlasmicStep__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStep";
  } else {
    func.displayName = `PlasmicStep.${nodeName}`;
  }
  return func;
}

export const PlasmicStep = Object.assign(
  // Top-level PlasmicStep renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    execute: makeNodeComponent("execute"),

    // Metadata about props expected for PlasmicStep
    internalVariantProps: PlasmicStep__VariantProps,
    internalArgProps: PlasmicStep__ArgProps
  }
);

export default PlasmicStep;
/* prettier-ignore-end */
