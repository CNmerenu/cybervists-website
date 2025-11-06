import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen w-full bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-8">
          Terms of Service
        </h1>

        <div className="text-gray-300 space-y-6">
          <p className="text-lg">
            <strong>Effective Date:</strong> January 1, 2025<br />
            <strong>Last Updated:</strong> November, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the Cybervists CIC website, training platforms, or digital resources ("the Services"), you agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree, please discontinue use of the Services. Cybervists CIC ("Cybervists," "we," "our," or "us") may update these Terms periodically to reflect legal, operational, or technological changes. Continued use of our Services after updates means you accept the revised version.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">2. About Cybervists CIC</h2>
              <p>Cybervists is a UK-registered Community Interest Company dedicated to digital literacy, cybersecurity awareness, and responsible online inclusion. We empower individuals, families, and communities through education, training, and advocacy for safer digital participation. Our activities include online courses, awareness events, and community capacity-building in cyber safety, data protection, and ethical technology use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">3. Permitted Use</h2>
              <p className="mb-4">You may access and use our Services for lawful, educational, and personal purposes consistent with Cybervists' community and inclusion goals. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Modify, distribute, or reproduce any Cybervists materials without written consent</li>
                <li>Misuse the platform or engage in unauthorised access, data extraction, or interference with systems</li>
                <li>Share misinformation, offensive, or discriminatory content via our digital spaces</li>
                <li>Breach copyright, data protection, or any other applicable regulation</li>
              </ul>
              <p>Cybervists reserves the right to restrict access, suspend accounts, or remove content that violates these terms or endangers others' digital safety.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">4. Data Protection and Privacy</h2>
              <p>Cybervists CIC is committed to protecting personal data in line with the UK General Data Protection Regulation (UK-GDPR) and the Data Protection Act 2018. Personal data is collected only when necessary for providing services, events, or communications. Data is securely stored using encryption, access control, and retention measures that align with ISO/IEC 27001:2022 information security standards. We maintain transparency regarding the use of personal data and offer individuals the right to access, rectify, or erase their information. We ensure that volunteers, partners, and contractors follow Cybervists' Information Security and Data Handling Policy. For more details, refer to our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">5. Cybersecurity and Safe Use</h2>
              <p className="mb-4">Cybervists implements and continuously reviews cybersecurity controls to ensure the confidentiality, integrity, and availability of its systems and data. Users are expected to engage responsibly by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Following basic security hygiene such as strong passwords and safe browsing</li>
                <li>Reporting suspected phishing, malicious links, or misuse through official channels</li>
                <li>Respecting other users and maintaining a safe, inclusive environment</li>
              </ul>
              <p>Our cybersecurity practices are informed by NCSC Cyber Essentials, ISO/IEC 27001:2022, and community-based safety frameworks.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">6. Intellectual Property</h2>
              <p>All content, logos, graphics, videos, and training materials provided through the Services are the property of Cybervists CIC or its licensors. You may temporarily download or print one copy of publicly available materials for personal, non-commercial use, provided you retain all copyright and proprietary notices and do not alter or redistribute content without written permission. All rights not expressly granted are reserved.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">7. Disclaimers</h2>
              <p>Cybervists provides its materials and Services for general educational and awareness purposes only. While we strive for accuracy and reliability, Cybervists makes no guarantees, express or implied, regarding the completeness, timeliness, or suitability of the information provided. Use of the Services is at your own risk. Cybervists accepts no liability for decisions made based on content accessed through our website, training, or materials.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">8. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Cybervists CIC, its directors, employees, and partners are not liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, our Services. Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot legally be excluded.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">9. Accessibility and Inclusion</h2>
              <p className="mb-4">Cybervists CIC is committed to providing inclusive digital spaces that are accessible to all users, regardless of ability, background, or digital experience. We actively work to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ensure accessible design and assistive compatibility of our materials</li>
                <li>Provide training that promotes online equity and digital participation</li>
                <li>Uphold respect and civility in all online interactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">10. Amendments</h2>
              <p>Cybervists may amend these Terms from time to time to reflect operational or legal changes. The latest version will always be available on our website, and the "Last Updated" date will indicate when changes were made.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">11. Governing Law</h2>
              <p>These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the UK courts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">12. Contact</h2>
              <p className="mb-4">For questions regarding these Terms of Service or Cybervists' data-protection practices, please contact:</p>
              <div className="space-y-2">
                <p>📧 <a href="mailto:info@cybervists.org" className="text-blue-400 hover:text-blue-300">info@cybervists.org</a></p>
                <p>🌐 <a href="https://www.cybervists.org" className="text-blue-400 hover:text-blue-300">www.cybervists.org</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}