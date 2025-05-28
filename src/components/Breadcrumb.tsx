import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface BreadcrumbItem {
  title: string;
  link?: string | null;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="breadcrumb"
      className="w-full bg-white px-6 py-2"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
    >
      <div className="flex items-center justify-between">
        {/* Breadcrumbs */}
        <ol className="flex flex-wrap items-center text-base text-gray-500">
          <li>
            <Link to="/" className="hover:text-indigo-600 flex items-center">
              <span
                className="icon-home"
                aria-label="Home"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                🏠
              </span>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mx-2 text-xl">/</span>
              {item.link ? (
                <Link to={item.link} className="hover:text-indigo-600">
                  {item.title}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{item.title}</span>
              )}
            </li>
          ))}
        </ol>
        {/* Button at the end of the row */}
        <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
          <DialogPrimitive.Trigger asChild>
            <Button
              className="text-white font-semibold px-6 py-2 rounded shadow"
              style={{
                fontSize: "1.2rem",
                letterSpacing: "1px",
                transition: "background-color 0.3s ease",
                backgroundColor: "#a3a8a7",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "var(--color-indigo-700)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#a3a8a7";
              }}
            >
              Click me
            </Button>
          </DialogPrimitive.Trigger>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50" />
            <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
              <DialogPrimitive.Title className="text-lg font-semibold mb-4">
                Add User Details
              </DialogPrimitive.Title>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    placeholder="Alice Johnson"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    placeholder="alice.johnson@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone</label>
                  <input
                    className="w-full border rounded px-3 py-2"
                    placeholder="1234567890"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Role</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    defaultValue="Developer"
                  >
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Joining Date</label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <DialogPrimitive.Close asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogPrimitive.Close>
                  <Button  className="text-white font-semibold px-6 py-2 rounded shadow"
              style={{
                fontSize: "1.2rem",
                letterSpacing: "1px",
                transition: "background-color 0.3s ease",
                backgroundColor: "#a3a8a7",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "var(--color-indigo-700)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#a3a8a7";
              }} type="submit">Submit</Button>
                </div>
              </form>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </div>
    </nav>
  );
};

export default Breadcrumb;
