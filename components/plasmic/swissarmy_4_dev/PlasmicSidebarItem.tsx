// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3sWsabkqMN5rF9tgqCnVDh
// Component: 0e8BPG79NE
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
import sty from "./PlasmicSidebarItem.module.css"; // plasmic-import: 0e8BPG79NE/css

export type PlasmicSidebarItem__VariantMembers = {
  active: "active";
};

export type PlasmicSidebarItem__VariantsArgs = {
  active?: SingleBooleanChoiceArg<"active">;
};

type VariantPropType = keyof PlasmicSidebarItem__VariantsArgs;
export const PlasmicSidebarItem__VariantProps = new Array<VariantPropType>(
  "active"
);

export type PlasmicSidebarItem__ArgsType = {
  children?: React.ReactNode;
  to?: string;
};

type ArgPropType = keyof PlasmicSidebarItem__ArgsType;
export const PlasmicSidebarItem__ArgProps = new Array<ArgPropType>(
  "children",
  "to"
);

export type PlasmicSidebarItem__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSidebarItemProps {
  children?: React.ReactNode;
  to?: string;
  active?: SingleBooleanChoiceArg<"active">;
  className?: string;
}

function PlasmicSidebarItem__RenderFunc(props: {
  variants: PlasmicSidebarItem__VariantsArgs;
  args: PlasmicSidebarItem__ArgsType;
  overrides: PlasmicSidebarItem__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootactive]: hasVariant(variants, "active", "active") }
      )}
      component={Link}
      href={args.to}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Contract",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </p.Stack>
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
  root: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSidebarItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSidebarItem__VariantsArgs;
    args?: PlasmicSidebarItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSidebarItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSidebarItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSidebarItem__ArgProps,
      internalVariantPropNames: PlasmicSidebarItem__VariantProps
    });

    return PlasmicSidebarItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebarItem";
  } else {
    func.displayName = `PlasmicSidebarItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebarItem = Object.assign(
  // Top-level PlasmicSidebarItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSidebarItem
    internalVariantProps: PlasmicSidebarItem__VariantProps,
    internalArgProps: PlasmicSidebarItem__ArgProps
  }
);

export default PlasmicSidebarItem;
/* prettier-ignore-end */
