import { Button } from "@/components/enchance-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const navLists = [
  { name: "HOME", href: "/" },
  { name: "ITEMS", href: "/" },
  { name: "SHOWROOM", href: "/" },
  { name: "ABOUT", href: "/" },
  { name: "CONTACT US", href: "/" },
];

const Header = () => {
  return (
    <nav className="flex justify-between items-center border-gray-300 px-6 py-4 border-b">
      <div className="font-bold text-xl">
        <Image src="/verre-logo.png" alt="Logo" width={80} height={20} />
      </div>
      <ul className="flex space-x-8 font-medium text-sm">
        {navLists.map((list) => (
          <li key={list.name}>
            <Button variant="linkHover2">
              <Link
                href={list.href}
                className="text-gray-800 hover:text-gray-500"
              >
                {list.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex space-x-4 text-gray-800">
        <FaShoppingCart className="text-lg hover:text-gray-500 cursor-pointer" />
        <FaSearch className="text-lg hover:text-gray-500 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
