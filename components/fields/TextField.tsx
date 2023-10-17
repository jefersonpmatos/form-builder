"use client";

import { MdTextFields } from "react-icons/md";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../form-elements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";
const extraAttributes = {
  label: "Text field",
  helperTExt: "Helper text",
  requirerd: false,
  placeHolder: "Placeholder",
};

export const TextFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  designerBtnElement: {
    icon: MdTextFields,
    label: "Text field",
  },

  designerComponent: DesignerComponent,
  formComponent: () => <div>Form</div>,
  propertiesComponent: () => <div>Properties</div>,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, requirerd, placeHolder, helperTExt } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {requirerd && "*"}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperTExt && (
        <p className=" text-muted-foreground text-[0.8rem]">{helperTExt}</p>
      )}
    </div>
  );
}
