import { agencyAddress, agencyEmail } from "@/constants/constants";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <section className="mb-10">
        <p className="mb-6">
          Welcome to <span className="font-semibold">Mark DMC</span> We respect
          your privacy and are committed to protecting your personal data. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website{" "}
          <span className="font-semibold"></span>
          or use our services.
        </p>
        <p>
          By accessing our site or services, you agree to this policy. If you
          disagree, please do not use our website.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following data when you interact with us:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Personal Information
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            Name, email, phone number (e.g., when you fill out a contact form)
          </li>
          <li>Business details (if you request services)</li>
          <li>
            Payment information (for transactions, processed securely via
            third-party gateways like Stripe/PayPal)
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Automated Data
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            <span className="font-medium">Cookies & Tracking:</span> We use
            cookies to analyze traffic (e.g., Google Analytics) and improve user
            experience.
          </li>
          <li>
            <span className="font-medium">IP Address, Browser Type:</span> For
            security and site optimization.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Third-Party Data
        </h3>
        <p>
          If you link social media accounts (e.g., Facebook, LinkedIn), we may
          receive profile info (with your permission).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use collected data to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide, operate, and improve our services</li>
          <li>Respond to inquiries and offer customer support</li>
          <li>Process payments and send invoices</li>
          <li>Send marketing emails (you can unsubscribe anytime)</li>
          <li>Monitor site performance and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          3. Data Sharing & Disclosure
        </h2>
        <p className="mb-4">
          We <span className="font-bold">do not sell</span> your data. However,
          we may share it with:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            <span className="font-medium">Service Providers:</span> Payment
            processors, hosting services, or marketing tools (e.g., Mailchimp).
          </li>
          <li>
            <span className="font-medium">Legal Compliance:</span> If required
            by law (e.g., court orders).
          </li>
          <li>
            <span className="font-medium">Business Transfers:</span> If our
            agency merges or is acquired.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Data Security
        </h2>
        <p>
          We implement industry-standard measures (SSL encryption, secure
          servers) to protect your data. However, no online method is 100%
          secure—you provide data at your own risk.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Your Rights
        </h2>
        <p className="mb-4">Depending on your location, you may:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Request access, correction, or deletion of your data.</li>
          <li>Opt out of marketing emails (via unsubscribe link).</li>
          <li>
            Disable cookies via browser settings (may affect site
            functionality).
          </li>
        </ul>
        <p>
          Contact us at <span className="font-semibold">{agencyEmail}</span> to
          exercise these rights.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Third-Party Links
        </h2>
        <p>
          Our site may link to other websites (e.g., client portfolios, social
          media). We are not responsible for their privacy practices.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. Policy Updates
        </h2>
        <p>
          We may update this policy periodically. Changes will be posted here
          with a revised Last Updated date.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
        <p className="mb-2">
          For questions about this Privacy Policy, email us at:
        </p>
        <ul className="space-y-1">
          <li className="flex items-center">
            <span className="mr-2">📧</span>
            <span className="font-medium">{agencyEmail}</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2">📍</span>
            <span className="font-medium">{agencyAddress}</span>
          </li>
        </ul>
      </section>

      <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>
          <strong>Note:</strong> For GDPR/CCPA compliance, specify if you serve
          EU/California users.
        </p>
        <p>If using Google Analytics/Facebook Pixel, mention them by name.</p>
        <p>Consult a legal professional to ensure full compliance.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
