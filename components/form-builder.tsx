"use client";

import { Form } from "@prisma/client";
import PreviewDialogBtn from "./preview-dialog-btn";
import PublishFormBtn from "./publish-form-btn";
import SaveFormBtn from "./save-form-btn";
import Designer from "./designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "./drag-overlay-wrapper";

function FormBuilder({ form }: { form: Form }) {
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default FormBuilder;
