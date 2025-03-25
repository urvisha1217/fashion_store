import React from "react";
import { FaBox, FaShoppingCart, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin-dashboard" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/admin-orders" },
    { name: "Customers", icon: <FaUsers />, path: "/admin-users" },
    { name: "Products", icon: <FaBox />, path: "/admin-products" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-5 shadow-lg">
      {/* Logo */}
      <h1 className="text-xl font-bold text-center text-blue-500 italic">Bita Fab</h1>

      {/* Menu Items */}
      <ul className="mt-8 space-y-2">
        {menuItems.map(({ name, icon, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-md transition-all duration-200 
                ${isActive ? "bg-blue-600 text-white" : "hover:bg-blue-500"}`
              }
            >
              <span className="text-xl">{icon}</span>
              <span className="ml-3">{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
