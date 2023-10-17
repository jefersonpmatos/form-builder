import { useState } from "react";
import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { SidebarBtnElementDragOverlay } from "./sidebar-btn-element";
import { ElementsType, FormElements } from "./form-elements";
import useDesigner from "./hooks/useDesigner";

function DragOverlayWrapper() {
  const { elements } = useDesigner();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>no drag overlay</div>;
  const isSidebarBtnElement = draggedItem?.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem?.data?.current?.elementId;
    const element = elements.find((element) => element.id === elementId);
    if (!element) {
      node = <div>Element not found</div>;
    } else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;
      node = (
        <div className="flex bg-accent border h-[120px] w-full py-2 px-4 opacity-80">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
