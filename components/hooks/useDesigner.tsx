import { DesignerContenxt } from "@/app/context/designer-context";
import React, { useContext } from "react";

function useDesigner() {
  const context = useContext(DesignerContenxt);

  if (!context) {
    throw new Error(
      "useDesigner must be used within a DesignerContextProvider"
    );
  }

  return context;
}

export default useDesigner;
