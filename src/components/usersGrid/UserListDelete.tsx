import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserListDeleteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onDeleteConfirm: () => void;
  userName: string;
}

const UserListDelete: React.FC<UserListDeleteProps> = ({
  open,
  setOpen,
  onDeleteConfirm,
  userName,
}) => {
  const handleDelete = () => {
    onDeleteConfirm();
    toast.success("Employee deleted successfully!");
    setOpen(false);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <DialogPrimitive.Title className="text-lg font-semibold mb-4">
            Delete Employee
          </DialogPrimitive.Title>
          <div className="space-y-4">
            <p>
              Are you sure you want to delete{" "}
              <span className="font-semibold">{userName}</span>? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-2 mt-6">
              <DialogPrimitive.Close asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogPrimitive.Close>
              <Button
                className="text-white font-semibold px-6 py-2 rounded shadow"
                style={{
                  fontSize: "1.2rem",
                  letterSpacing: "1px",
                  backgroundColor: "#dc2626", // Red color for delete action
                }}
                type="button"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default UserListDelete;