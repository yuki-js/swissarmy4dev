// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3sWsabkqMN5rF9tgqCnVDh
// Component: FlU_PKfwwn
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_swissarmy_4_dev.module.css"; // plasmic-import: 3sWsabkqMN5rF9tgqCnVDh/projectcss
import sty from "./PlasmicContainer.module.css"; // plasmic-import: FlU_PKfwwn/css

export type PlasmicContainer__VariantMembers = {};

export type PlasmicContainer__VariantsArgs = {};
type VariantPropType = keyof PlasmicContainer__VariantsArgs;
export const PlasmicContainer__VariantProps = new Array<VariantPropType>();

export type PlasmicContainer__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicContainer__ArgsType;
export const PlasmicContainer__ArgProps = new Array<ArgPropType>("children");

export type PlasmicContainer__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultContainerProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicContainer__RenderFunc(props: {
  variants: PlasmicContainer__VariantsArgs;
  args: PlasmicContainer__ArgsType;
  overrides: PlasmicContainer__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContainer__VariantsArgs;
    args?: PlasmicContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContainer__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicContainer__ArgProps,
      internalVariantPropNames: PlasmicContainer__VariantProps
    });

    return PlasmicContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContainer";
  } else {
    func.displayName = `PlasmicContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicContainer = Object.assign(
  // Top-level PlasmicContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicContainer
    internalVariantProps: PlasmicContainer__VariantProps,
    internalArgProps: PlasmicContainer__ArgProps
  }
);

export default PlasmicContainer;
/* prettier-ignore-end */
