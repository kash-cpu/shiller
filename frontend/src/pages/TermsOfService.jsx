import React from "react";

function TermsOfService() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Terms of Service</h1>
        <p className="text-lg leading-7 mb-6">
          Effective Date: <span className="font-semibold">[Insert Date]</span>
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">1. Acceptance of Terms</h2>
          <p className="text-lg leading-7">
            By accessing or using the Shill web application (the Service), you agree to be bound by these Terms of Service (Terms). If you do not agree to these Terms, you must not use the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">2. Changes to Terms</h2>
          <p className="text-lg leading-7">
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the effective date at the top. Your continued use of the Service after any modifications constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">3. Eligibility</h2>
          <p className="text-lg leading-7">
            You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this eligibility requirement. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">4. Account Registration</h2>
          <p className="text-lg leading-7">
            To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">5. User Conduct</h2>
          <p className="text-lg leading-7">
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>Use the Service in any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>Engage in any conduct that restricts or inhibits anyones use or enjoyment of the Service, or which may harm Shill or its users.</li>
            <li>Impersonate or attempt to impersonate Shill, a Shill employee, another user, or any other person or entity.</li>
            <li>Transmit any advertising or promotional material, including junk mail, spam, or chain letters.</li>
            <li>Engage in fraudulent or deceptive practices while using the Service.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">6. Shill Campaigns</h2>
          <p className="text-lg leading-7">
            Shill allows token founders to create campaigns where users can promote their tokens through social media. By participating in a shill campaign, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>Follow the campaign guidelines set by the token founder.</li>
            <li>Ensure that your posts are truthful and do not mislead others about the token or project.</li>
            <li>Not engage in any fraudulent or deceptive practices.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">7. Rewards and Payments</h2>
          <p className="text-lg leading-7">
            Users may earn rewards in the form of tokens for participating in shill campaigns. The terms of reward distribution will be outlined in each campaign. Shill reserves the right to withhold rewards if fraudulent activity or violations of these Terms are detected.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">8. Intellectual Property</h2>
          <p className="text-lg leading-7">
            All content, features, and functionality on the Service, including text, graphics, logos, and software, are the exclusive property of Shill or its licensors. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">9. Disclaimers</h2>
          <p className="text-lg leading-7">
            The Service is provided on an as-is and as-available basis. Shill makes no representations or warranties of any kind, express or implied, regarding the operation of the Service or the information, content, materials, or products included. To the fullest extent permissible by applicable law, Shill disclaims all warranties, including implied warranties of merchantability and fitness for a particular purpose.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">10. Limitation of Liability</h2>
          <p className="text-lg leading-7">
            To the fullest extent permitted by law, Shill and its affiliates will not be liable for indirect, incidental, or consequential damages, including loss of profits, data, or goodwill, arising out of your use of or inability to use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">11. Indemnification</h2>
          <p className="text-lg leading-7">
            You agree to defend, indemnify, and hold harmless Shill, its affiliates, and their officers, employees, and agents from any claims, damages, or expenses arising out of your use of the Service or violation of these Terms.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsOfService;
