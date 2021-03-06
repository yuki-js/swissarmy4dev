// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3sWsabkqMN5rF9tgqCnVDh
// Component: meQXaQnIIWq
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
import MiniButton from "../../MiniButton"; // plasmic-import: 6HqZwsKMES/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_swissarmy_4_dev.module.css"; // plasmic-import: 3sWsabkqMN5rF9tgqCnVDh/projectcss
import sty from "./PlasmicIntInput.module.css"; // plasmic-import: meQXaQnIIWq/css

import RemoveBlack24DpsvgIcon from "./icons/PlasmicIcon__RemoveBlack24Dpsvg"; // plasmic-import: J64mUFlwf_/icon
import AddBlack24DpsvgIcon from "./icons/PlasmicIcon__AddBlack24Dpsvg"; // plasmic-import: wFtV6hqAP-/icon

export type PlasmicIntInput__VariantMembers = {
  disabled: "disabled";
};

export type PlasmicIntInput__VariantsArgs = {
  disabled?: SingleBooleanChoiceArg<"disabled">;
};

type VariantPropType = keyof PlasmicIntInput__VariantsArgs;
export const PlasmicIntInput__VariantProps = new Array<VariantPropType>(
  "disabled"
);

export type PlasmicIntInput__ArgsType = {
  title?: React.ReactNode;
  placeholder?: string;
};

type ArgPropType = keyof PlasmicIntInput__ArgsType;
export const PlasmicIntInput__ArgProps = new Array<ArgPropType>(
  "title",
  "placeholder"
);

export type PlasmicIntInput__OverridesType = {
  root?: p.Flex<"div">;
  decrement?: p.Flex<typeof MiniButton>;
  increment?: p.Flex<typeof MiniButton>;
  text?: p.Flex<"input">;
};

export interface DefaultIntInputProps {
  title?: React.ReactNode;
  placeholder?: string;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

function PlasmicIntInput__RenderFunc(props: {
  variants: PlasmicIntInput__VariantsArgs;
  args: PlasmicIntInput__ArgsType;
  overrides: PlasmicIntInput__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__qZcx9)}>
        <div className={classNames(projectcss.all, sty.freeBox__kb1RE)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___2NYlH)}>
              {p.renderPlasmicSlot({
                defaultContents: "Enter some text",
                value: args.title
              })}
            </div>
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__kBbJd)}>
            {(hasVariant(variants, "disabled", "disabled") ? true : true) ? (
              <MiniButton
                data-plasmic-name={"decrement"}
                data-plasmic-override={overrides.decrement}
                className={classNames("__wab_instance", sty.decrement, {
                  [sty.decrementdisabled]: hasVariant(
                    variants,
                    "disabled",
                    "disabled"
                  )
                })}
              >
                <RemoveBlack24DpsvgIcon
                  className={classNames(projectcss.all, sty.svg__qXZdj, {
                    [sty.svgdisabled__qXZdjUxPar]: hasVariant(
                      variants,
                      "disabled",
                      "disabled"
                    )
                  })}
                  role={"img"}
                />
              </MiniButton>
            ) : null}
            {(hasVariant(variants, "disabled", "disabled") ? true : true) ? (
              <MiniButton
                data-plasmic-name={"increment"}
                data-plasmic-override={overrides.increment}
                className={classNames("__wab_instance", sty.increment, {
                  [sty.incrementdisabled]: hasVariant(
                    variants,
                    "disabled",
                    "disabled"
                  )
                })}
              >
                <AddBlack24DpsvgIcon
                  className={classNames(projectcss.all, sty.svg__cyztI)}
                  role={"img"}
                />
              </MiniButton>
            ) : null}
          </div>
        </div>

        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__uXn7Y, {
              [sty.freeBoxdisabled__uXn7YUxPar]: hasVariant(
                variants,
                "disabled",
                "disabled"
              )
            })}
          >
            <input
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.text,
                {
                  [sty.textdisabled]: hasVariant(
                    variants,
                    "disabled",
                    "disabled"
                  )
                }
              )}
              disabled={
                hasVariant(variants, "disabled", "disabled") ? true : undefined
              }
              placeholder={args.placeholder}
              type={"text" as const}
            />
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "decrement", "increment", "text"],
  decrement: ["decrement"],
  increment: ["increment"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  decrement: typeof MiniButton;
  increment: typeof MiniButton;
  text: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIntInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIntInput__VariantsArgs;
    args?: PlasmicIntInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIntInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIntInput__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIntInput__ArgProps,
      internalVariantPropNames: PlasmicIntInput__VariantProps
    });

    return PlasmicIntInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIntInput";
  } else {
    func.displayName = `PlasmicIntInput.${nodeName}`;
  }
  return func;
}

export const PlasmicIntInput = Object.assign(
  // Top-level PlasmicIntInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    decrement: makeNodeComponent("decrement"),
    increment: makeNodeComponent("increment"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicIntInput
    internalVariantProps: PlasmicIntInput__VariantProps,
    internalArgProps: PlasmicIntInput__ArgProps
  }
);

export default PlasmicIntInput;
/* prettier-ignore-end */
