import * as React from "react";
import {
  PlasmicEnumInputVariant,
  DefaultEnumInputVariantProps,
} from "./plasmic/swissarmy_4_dev/PlasmicEnumInputVariant";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface EnumInputVariantProps extends DefaultEnumInputVariantProps {
  onClick: () => void;
}

function EnumInputVariant_(
  props: EnumInputVariantProps,
  ref: HTMLElementRefOf<"div">
) {
  return <PlasmicEnumInputVariant root={{ ref }} {...props} />;
}

const EnumInputVariant = React.forwardRef(EnumInputVariant_);
export default EnumInputVariant;
