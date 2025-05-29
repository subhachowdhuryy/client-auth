import React, { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const roles = ["Developer", "Designer", "Manager"] as const;

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone must be at most 15 digits")
    .regex(/^[0-9]+$/, "Phone must contain only digits")
    .optional(),
  role: z.enum(roles, { required_error: "Role is required" }),
  joiningDate: z
    .string()
    .refine(
      (val) => !!val && moment(val).isSameOrBefore(moment(), "day"),
      "Joining date must be today or in the past"
    ),
});

type FormValues = z.infer<typeof schema>;

const defaultForm: FormValues = {
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultForm,
  });

  // Populate form when editing
  useEffect(() => {
    if (editUser) {
      reset({
        name: editUser.name,
        email: editUser.email,
        phone: editUser.phone || "",
        role: editUser.role,
        joiningDate: editUser.joiningDate,
      });
    } else {
      reset(defaultForm);
    }
  }, [editUser, open, reset]);

  const onSubmit = (data: FormValues) => {
    const formatted = {
      ...data,
      joiningDate: moment(data.joiningDate).format("YYYY-MM-DD"),
    };
    onUserSubmit(editUser ? { ...formatted, id: editUser.id } : formatted);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <DialogPrimitive.Title className="text-lg font-semibold mb-4">
            {editUser ? "Edit Employee" : "Add Employee"}
          </DialogPrimitive.Title>
          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                {...register("name")}
                className="w-full border rounded px-3 py-2"
                placeholder="Alice Johnson"
                required
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                {...register("email")}
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="alice.johnson@example.com"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                {...register("phone")}
                className="w-full border rounded px-3 py-2"
                placeholder="1234567890"
                maxLength={15}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <select
                {...register("role")}
                className="w-full border rounded px-3 py-2"
                required
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && (
                <span className="text-red-500 text-sm">
                  {errors.role.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Joining Date</label>
              <input
                {...register("joiningDate")}
                type="date"
                className="w-full border rounded px-3 py-2"
                required
                max={moment().format("YYYY-MM-DD")}
              />
              {errors.joiningDate && (
                <span className="text-red-500 text-sm">
                  {errors.joiningDate.message}
                </span>
              )}
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

