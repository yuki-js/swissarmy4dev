// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3sWsabkqMN5rF9tgqCnVDh
// Component: HyhoohE-va
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
import sty from "./PlasmicCard.module.css"; // plasmic-import: HyhoohE-va/css

export type PlasmicCard__VariantMembers = {};

export type PlasmicCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCard__VariantsArgs;
export const PlasmicCard__VariantProps = new Array<VariantPropType>();

export type PlasmicCard__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCard__ArgsType;
export const PlasmicCard__ArgProps = new Array<ArgPropType>("children");

export type PlasmicCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCardProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicCard__RenderFunc(props: {
  variants: PlasmicCard__VariantsArgs;
  args: PlasmicCard__ArgsType;
  overrides: PlasmicCard__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
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
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCard__VariantsArgs;
    args?: PlasmicCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCard__ArgProps,
      internalVariantPropNames: PlasmicCard__VariantProps
    });

    return PlasmicCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCard";
  } else {
    func.displayName = `PlasmicCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCard = Object.assign(
  // Top-level PlasmicCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCard
    internalVariantProps: PlasmicCard__VariantProps,
    internalArgProps: PlasmicCard__ArgProps
  }
);

export default PlasmicCard;
/* prettier-ignore-end */