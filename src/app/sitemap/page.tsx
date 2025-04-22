import Link from "next/link";
import React from "react";

const Sitemap = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sitemap</h1>
        <p className="text-gray-600">Explore all pages on our website</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
          Website Navigation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Pages */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Main Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">🏠</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">🛠️</span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">ℹ️</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">📧</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Client & Legal Pages */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Client & Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portal"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">🔒</span>
                  <span>Client Portal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">🛡️</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="mr-2">📜</span>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Digital Marketing
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>SEO Services</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Social Media Marketing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>PPC Advertising</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Creative Services
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Graphic Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Video Editing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Content Creation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Web Solutions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Website Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>E-commerce Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Website Maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Need Help Navigating?
        </h2>
        <p className="text-gray-700 mb-4">
          Can not find what you are looking for? Our team is happy to help guide
          you to the right resources.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-mustard hover:bg-mustard-dark text-white px-6 py-2 rounded-md transition"
        >
          Contact Support
        </Link>
      </section>
    </div>
  );
};

export default Sitemap;
