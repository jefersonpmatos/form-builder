import React from "react";
import SidebarBtnElement from "./sidebar-btn-element";
import { FormElements } from "./form-elements";

function FormElementSidebar() {
  return (
    <div>
      {" "}
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
}

export default FormElementSidebar;
