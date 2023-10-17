import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { FaIcons } from "react-icons/fa";
import { toast } from "./ui/use-toast";
import { PublishForm } from "@/actions/form";
import { useRouter } from "next/navigation";
function PublishFormBtn({ id }: { id: number }) {
  const router = useRouter();
  const [loading, startTransition] = useTransition();

  async function publishForm() {
    try {
      await PublishForm(id);
      toast({
        title: "Success",
        description: "Form is now available to the public",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400">
          <MdOutlinePublish className="h-6 w-6" />
          Publish
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. After publishing, this form cannot be
            edited.
            <br />
            <br />
            <span className="font-medium">
              By publishing this form will be available to the public, and you
              will ble able to collect submissions.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(publishForm);
            }}
          >
            Proceed {loading && <FaIcons className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PublishFormBtn;
