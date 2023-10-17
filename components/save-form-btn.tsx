import { UpdateFormContent } from "@/actions/form";
import useDesigner from "./hooks/useDesigner";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import { toast } from "./ui/use-toast";
import { useTransition } from "react";
import { FaSpinner } from "react-icons/fa";
function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Form saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="h-6 w-6" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}

export default SaveFormBtn;
