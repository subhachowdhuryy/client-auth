import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  title: string;
  link?: string | null;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onAddClick?: () => void; // callback to open modal
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onAddClick }) => {
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
        {/* Button to trigger modal */}
        <Button
          className="text-white font-semibold px-6 py-2 rounded shadow"
          style={{
            fontSize: "1.2rem",
            letterSpacing: "1px",
            backgroundColor: "#a3a8a7",
          }}
          onClick={onAddClick}
        >
          Click me
        </Button>
      </div>
    </nav>
  );
};

export default Breadcrumb;
