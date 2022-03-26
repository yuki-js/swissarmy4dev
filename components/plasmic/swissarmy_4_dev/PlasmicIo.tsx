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
import sty from "./PlasmicIo.module.css"; // plasmic-import: eJuRTncMA_/css

import ArrowBackIosBlack24DpsvgIcon from "./icons/PlasmicIcon__ArrowBackIosBlack24Dpsvg"; // plasmic-import: B55IpMLX_T/icon

export type PlasmicIo__VariantMembers = {
  sidebarOpen: "sidebarOpen";
};

export type PlasmicIo__VariantsArgs = {
  sidebarOpen?: SingleBooleanChoiceArg<"sidebarOpen">;
};

type VariantPropType = keyof PlasmicIo__VariantsArgs;
export const PlasmicIo__VariantProps = new Array<VariantPropType>(
  "sidebarOpen"
);

export type PlasmicIo__ArgsType = {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIo__ArgsType;
export const PlasmicIo__ArgProps = new Array<ArgPropType>(
  "children",
  "sidebar"
);

export type PlasmicIo__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultIoProps {}

function PlasmicIo__RenderFunc(props: {
  variants: PlasmicIo__VariantsArgs;
  args: PlasmicIo__ArgsType;
  overrides: PlasmicIo__OverridesType;

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
            sty.root,
            {
              [sty.rootsidebarOpen]: hasVariant(
                variants,
                "sidebarOpen",
                "sidebarOpen"
              )
            }
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__kohXk)}>
            <div
              className={classNames(projectcss.all, sty.freeBox__pwE5V, {
                [sty.freeBoxsidebarOpen__pwE5VU6VG]: hasVariant(
                  variants,
                  "sidebarOpen",
                  "sidebarOpen"
                )
              })}
            >
              <div className={classNames(projectcss.all, sty.freeBox__kHb6W)}>
                <p.Stack
                  as={p.PlasmicLink}
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  hasGap={true}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                  component={Link}
                  href={"/" as const}
                  platform={"nextjs"}
                >
                  <ArrowBackIosBlack24DpsvgIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />

                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Back"}
                  </div>
                </p.Stack>

                {(
                  hasVariant(variants, "sidebarOpen", "sidebarOpen")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___7M4X, {
                      [sty.freeBoxsidebarOpen___7M4XU6VG]: hasVariant(
                        variants,
                        "sidebarOpen",
                        "sidebarOpen"
                      )
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: null,
                      value: args.sidebar
                    })}
                  </div>
                ) : null}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__tIi0U)}>
              {true ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___8Vf35)}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: null,
                    value: args.children
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "svg", "text"],
  link: ["link", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIo__VariantsArgs;
    args?: PlasmicIo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIo__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIo__ArgProps,
      internalVariantPropNames: PlasmicIo__VariantProps
    });

    return PlasmicIo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIo";
  } else {
    func.displayName = `PlasmicIo.${nodeName}`;
  }
  return func;
}

export const PlasmicIo = Object.assign(
  // Top-level PlasmicIo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicIo
    internalVariantProps: PlasmicIo__VariantProps,
    internalArgProps: PlasmicIo__ArgProps
  }
);

export default PlasmicIo;
/* prettier-ignore-end */
