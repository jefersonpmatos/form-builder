"use client";

import { ElementsType, FormElement } from "../form-elements";
import { Label } from "../ui/label";
import { RiSeparator } from "react-icons/ri";
import { Separator } from "../ui/separator";

const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
  }),

  designerBtnElement: {
    icon: RiSeparator,
    label: "Separator Field",
  },

  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

function DesignerComponent() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">
        Separator Field
        <Separator />
      </Label>
    </div>
  );
}

function FormComponent() {
  return <Separator />;
}

function PropertiesComponent() {
  return <p>No properties for this element</p>;
}
