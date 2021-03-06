// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicEnumInput,
  DefaultEnumInputProps,
} from "./plasmic/swissarmy_4_dev/PlasmicEnumInput";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import EnumInputVariant from "./EnumInputVariant";

export interface EnumInputProps<V extends string[]>
  extends DefaultEnumInputProps {
  variants: V;
  value: V[number];
  onChange?: (value: V[number]) => void;
  disabled?: boolean;
}

function EnumInput_<V extends string[]>(
  { variants, value, onChange, disabled, ...props }: EnumInputProps<V>,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicEnumInput root={{ ref }} disabled={disabled} {...props}>
      {variants.map((variant, index) => {
        return (
          <EnumInputVariant
            key={index}
            checked={variant === value}
            onClick={() => {
              !disabled && onChange && onChange(variant);
            }}
          >
            {variant}
          </EnumInputVariant>
        );
      })}
    </PlasmicEnumInput>
  );
}

const EnumInput = React.forwardRef(EnumInput_);
export default EnumInput;
