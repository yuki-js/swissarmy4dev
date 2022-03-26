// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SentimentSatisfiedAltBlack24DpsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SentimentSatisfiedAltBlack24DpsvgIcon(
  props: SentimentSatisfiedAltBlack24DpsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0V0z"} fill={"none"}></path>

      <path d={"M0 0h24v24H0V0z"} fill={"none"}></path>

      <circle cx={"15.5"} cy={"9.5"} r={"1.5"}></circle>

      <circle cx={"8.5"} cy={"9.5"} r={"1.5"}></circle>

      <circle cx={"15.5"} cy={"9.5"} r={"1.5"}></circle>

      <circle cx={"8.5"} cy={"9.5"} r={"1.5"}></circle>

      <path
        d={
          "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"
        }
      ></path>
    </svg>
  );
}

export default SentimentSatisfiedAltBlack24DpsvgIcon;
/* prettier-ignore-end */
