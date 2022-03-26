// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3sWsabkqMN5rF9tgqCnVDh
// Component: eJuRTncMA_
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
import sty from "./PlasmicIoPage2.module.css"; // plasmic-import: eJuRTncMA_/css

export type PlasmicIoPage2__VariantMembers = {};

export type PlasmicIoPage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicIoPage2__VariantsArgs;
export const PlasmicIoPage2__VariantProps = new Array<VariantPropType>();

export type PlasmicIoPage2__ArgsType = {};
type ArgPropType = keyof PlasmicIoPage2__ArgsType;
export const PlasmicIoPage2__ArgProps = new Array<ArgPropType>();

export type PlasmicIoPage2__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultIoPage2Props {}

function PlasmicIoPage2__RenderFunc(props: {
  variants: PlasmicIoPage2__VariantsArgs;
  args: PlasmicIoPage2__ArgsType;
  overrides: PlasmicIoPage2__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
        />
      </div>
    </React.Fragment>
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
  PlasmicIoPage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIoPage2__VariantsArgs;
    args?: PlasmicIoPage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIoPage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIoPage2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIoPage2__ArgProps,
      internalVariantPropNames: PlasmicIoPage2__VariantProps
    });

    return PlasmicIoPage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIoPage2";
  } else {
    func.displayName = `PlasmicIoPage2.${nodeName}`;
  }
  return func;
}

export const PlasmicIoPage2 = Object.assign(
  // Top-level PlasmicIoPage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIoPage2
    internalVariantProps: PlasmicIoPage2__VariantProps,
    internalArgProps: PlasmicIoPage2__ArgProps
  }
);

export default PlasmicIoPage2;
/* prettier-ignore-end */
