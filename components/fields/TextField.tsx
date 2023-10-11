"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../form-elements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text field",
      helperTExt: "Helper text",
      requirerd: false,
      placeHolder: "Placeholder",
    },
  }),

  designerBtnElement: {
    icon: MdTextFields,
    label: "Text field",
  },

  designerComponent: () => <div>Designer component</div>,
  formComponent: () => <div>Form</div>,
  propertiesComponent: () => <div>Properties</div>,
};
