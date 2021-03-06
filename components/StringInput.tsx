// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicStringInput,
  DefaultStringInputProps,
} from "./plasmic/swissarmy_4_dev/PlasmicStringInput";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface StringInputProps extends DefaultStringInputProps {
  value: string;
  onChange?: (value: string) => void;
}

function StringInput_(
  { value, onChange, ...props }: StringInputProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicStringInput
      root={{ ref }}
      {...props}
      text={{
        value,
        onChange: (e) => {
          onChange && onChange(e.target.value);
        },
      }}
      copy={{
        onClick: async () => {
          await navigator.clipboard.writeText(value);
        },
      }}
      paste={{
        wrap: (c) =>
          (globalThis?.navigator?.clipboard as any)?.readText ? c : undefined,
        props: {
          onClick: async () => {
            const text = await navigator.clipboard.readText();
            onChange && onChange(text);
          },
        },
      }}
    />
  );
}

const StringInput = React.forwardRef(StringInput_);
export default StringInput;
