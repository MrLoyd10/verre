import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

const links = [
  "CAREERS",
  "ABOUT",
  "SUSTAINABILITY",
  "BLOG",
  "TERMS OF SERVICE",
  "PRIVACY POLICY",
  "REFUND POLICY",
];

const Footer = () => {
  return (
    <footer className="px-8 py-14">
      <div className="mx-auto container">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
          {/* Left Section - Links */}
          <div className="flex flex-col space-y-2 ml-20 text-black text-sm">
            {links.map((link, index) => (
              <a href="#" key={index} className="hover:underline">
                {link}
              </a>
            ))}
          </div>

          {/* Right Section - Newsletter & Social Links */}
          <div className="flex flex-col space-y-4">
            {/* Stay Connected Section */}
            <div>
              <h3 className="font-semibold text-black text-lg">
                STAY CONNECTED!
              </h3>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border-gray-400 px-4 py-2 border rounded w-full md:w-80"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="font-semibold text-black text-lg">FOLLOW US</h4>
              <div className="flex space-x-4 mt-2 text-black">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-gray-700"
                >
                  <FaFacebook size={24} />
                </a>
                <a href="#" aria-label="Email" className="hover:text-gray-700">
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-gray-700"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
