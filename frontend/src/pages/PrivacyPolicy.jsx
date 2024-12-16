import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Privacy Policy</h1>
        <p className="text-lg leading-7 mb-6">
          Effective Date: <span className="font-semibold">[Insert Date]</span>
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">1. Introduction</h2>
          <p className="text-lg leading-7">
            Welcome to <span className="font-semibold text-blue-800">Shill</span>! Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our web3 application (the "Service"). By accessing or using Shill, you agree to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <span className="font-semibold text-blue-800">Personal Information:</span> When you create an account or interact with our Service, we may collect personal information such as your name, email address, wallet address, and any other information you provide.
            </li>
            <li>
              <span className="font-semibold text-blue-800">Usage Data:</span> We may collect information about how you access and use the Service, including your IP address, browser type, device information, pages visited, and the time and date of your visits.
            </li>
            <li>
              <span className="font-semibold text-blue-800">Cookies and Tracking Technologies:</span> We may use cookies, web beacons, and similar tracking technologies to collect information about your interactions with our Service. You can control cookies through your browser settings.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>To provide, maintain, and improve our Service.</li>
            <li>To process your transactions and manage your account.</li>
            <li>To communicate with you, including sending updates, newsletters, and promotional materials.</li>
            <li>To analyze usage patterns and improve the user experience.</li>
            <li>To detect, prevent, and address technical issues or fraudulent activities.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">4. Disclosure of Your Information</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <span className="font-semibold text-blue-800">With Service Providers:</span> We may share your information with third-party service providers who assist us in operating our Service, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </li>
            <li>
              <span className="font-semibold text-blue-800">For Legal Reasons:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </li>
            <li>
              <span className="font-semibold text-blue-800">Business Transfers:</span> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
            </li>
            <li>
              <span className="font-semibold text-blue-800">With Your Consent:</span> We may disclose your information for any other purpose with your consent.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">5. Data Security</h2>
          <p className="text-lg leading-7">
            We take the security of your information seriously and implement reasonable measures to protect it. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">6. Your Rights</h2>
          <p className="text-lg leading-7">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>The right to access, update, or delete the information we have about you.</li>
            <li>The right to request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
            <li>The right to object to or restrict the processing of your personal information.</li>
            <li>The right to withdraw consent at any time where we rely on your consent to process your personal information.</li>
          </ul>
          <p className="text-lg leading-7 mt-4">
            To exercise these rights, please contact us using the contact information provided below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">7. Third-Party Links</h2>
          <p className="text-lg leading-7">
            Our Service may contain links to third-party websites or services that are not owned or controlled by Shill. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">8. Children’s Privacy</h2>
          <p className="text-lg leading-7">
            Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">9. Changes to This Privacy Policy</h2>
          <p className="text-lg leading-7">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top. Your continued use of the Service after any modifications will constitute your acknowledgment and consent to the modified policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">10. Contact Us</h2>
          <p className="text-lg leading-7">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-lg font-semibold mt-2">Email: shill@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
