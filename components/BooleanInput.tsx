import * as React from "react";
import {
  PlasmicBooleanInput,
  DefaultBooleanInputProps,
} from "./plasmic/swissarmy_4_dev/PlasmicBooleanInput";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface BooleanInputProps extends DefaultBooleanInputProps {
  value: boolean;
  onChange?: (value: boolean) => void;
}

function BooleanInput_(
  { value, onChange, ...props }: BooleanInputProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicBooleanInput
      root={{ ref }}
      {...props}
      _switch={{
        isChecked: value,
        onChange: (e) => {
          onChange && onChange(e);
        },
      }}
    />
  );
}

const BooleanInput = React.forwardRef(BooleanInput_);
export default BooleanInput;
