import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  title: string;
  link?: string | null;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="w-full bg-white"
      style={{
        // boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginLeft: 0,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <ol className="w-full flex flex-wrap items-center justify-start text-base text-gray-500 pl-0 ml-0">
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
    </nav>
  );
};

export default Breadcrumb;