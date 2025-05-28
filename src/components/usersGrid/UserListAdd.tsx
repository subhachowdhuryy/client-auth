import React, { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import moment from "moment";

export interface UserInterface {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  role: "Developer" | "Designer" | "Manager";
  joiningDate: string;
}

interface UserListAddProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onUserSubmit: (user: UserInterface) => void;
  editUser: UserInterface | null;
}

const defaultForm: UserInterface = {
  name: "",
  email: "",
  phone: "",
  role: "Developer",
  joiningDate: "",
};


const UserListAdd: React.FC<UserListAddProps> = ({
  open,
  setOpen,
  onUserSubmit,
  editUser,
}) => {
  const [form, setForm] = useState<UserInterface>(defaultForm);

  useEffect(() => {
    if (editUser) {
      setForm(editUser);
    } else {
      setForm(defaultForm);
    }
  }, [editUser, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = {
      ...form,
      joiningDate: moment(form.joiningDate).format("YYYY-MM-DD"),
    };
    onUserSubmit(editUser ? { ...formatted, id: editUser.id } : formatted);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <DialogPrimitive.Title className="text-lg font-semibold mb-4">
            {editUser ? "Edit User" : "Add User"}
          </DialogPrimitive.Title>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Alice Johnson"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="alice.johnson@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="1234567890"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Joining Date</label>
              <input
                name="joiningDate"
                type="date"
                value={form.joiningDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
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
                  backgroundColor: "#3730a3",
                }}
                type="submit"
              >
                {editUser ? "Update" : "Submit"}
              </Button>
            </div>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
export default UserListAdd;

