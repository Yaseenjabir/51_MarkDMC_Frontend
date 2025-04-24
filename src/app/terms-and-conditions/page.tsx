import { agencyAddress, agencyEmail, agencyPhone } from "@/constants/constants";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <section className="mb-10">
        <p className="mb-6">
          Welcome to <span className="font-semibold">Mark DMC</span>. These
          Terms and Conditions govern your use of our website and all services
          provided by our agency.
        </p>
        <p>
          By accessing or using our website and services, you agree to be bound
          by these Terms. If you disagree with any part, you may not access our
          services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. Services Overview
        </h2>
        <p className="mb-4">
          We provide digital marketing services including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Marketing</li>
          <li>Web Design and Development</li>
          <li>Graphic Design</li>
          <li>Video Production and Editing</li>
          <li>Pay-Per-Click Advertising</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. User Responsibilities
        </h2>
        <p className="mb-4">When using our services, you agree to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide accurate and complete information</li>
          <li>Not use our services for any illegal or unauthorized purpose</li>
          <li>
            Not reproduce, duplicate, copy, or resell any part of our services
          </li>
          <li>Not transmit any viruses or malicious code</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on our website and materials we create (including logos,
          designs, and reports) are our exclusive property unless otherwise
          stated.
        </p>
        <p>
          Clients retain ownership of their brand assets but grant us limited
          rights to use them for service delivery and portfolio purposes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Payments and Refunds
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Payment terms will be specified in individual contracts</li>
          <li>Late payments may incur additional fees</li>
          <li>
            Refund policies vary by service type and will be outlined in your
            service agreement
          </li>
          <li>
            Custom work (like website development) typically requires
            non-refundable deposits
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Service Limitations
        </h2>
        <p className="mb-4">
          While we strive for excellence, we cannot guarantee:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Specific results from marketing campaigns (e.g., exact ranking
            positions or conversion rates)
          </li>
          <li>
            Immediate response times (unless covered by a specific service level
            agreement)
          </li>
          <li>Compatibility with all third-party platforms or services</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Termination
        </h2>
        <p className="mb-4">
          Either party may terminate services with written notice, subject to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Completion of any outstanding contractual obligations</li>
          <li>Payment for services rendered up to termination date</li>
          <li>Return of any client materials if applicable</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the maximum extent permitted by law, we shall not be liable for:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Any indirect, incidental, or consequential damages</li>
          <li>Loss of profits, data, or business opportunities</li>
          <li>Third-party actions that affect service performance</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          8. Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be effective immediately upon posting on our website. Your continued
          use of our services constitutes acceptance of the modified terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          9. Contact Information
        </h2>
        <p className="mb-2">
          For questions about these Terms, please contact us at:
        </p>
        <ul className="space-y-1">
          <li className="flex items-center">
            <span className="mr-2">📧</span>
            <span className="font-medium">{agencyEmail}</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">📞</span>
            <span className="font-medium">{agencyPhone}</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">📍</span>
            <span className="font-medium">{agencyAddress}</span>
          </li>
        </ul>
      </section>

      <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>
          <strong>Note:</strong> These terms should be reviewed by a legal
          professional to ensure compliance with local laws and regulations.
        </p>
        <p>
          Specific service agreements may override or supplement these general
          terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
