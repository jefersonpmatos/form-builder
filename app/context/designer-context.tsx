"use client";

import { FormElementInstance } from "@/components/form-elements";
import { createContext, useState } from "react";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
};

export const DesignerContenxt = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => {
      return prev.filter((element) => element.id !== id);
    });
  };

  return (
    <DesignerContenxt.Provider
      value={{
        elements,
        addElement,
        removeElement,
      }}
    >
      {children}
    </DesignerContenxt.Provider>
  );
}
