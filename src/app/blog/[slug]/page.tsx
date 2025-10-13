import { Calendar, User, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogPostClient from "@/components/BlogPostClient";

interface Params {
  params: Promise<{ slug: string }>;
}

// Sample blog content for demonstration
const samplePosts: Record<string, {
  title: string;
  publishedAt: string;
  author: { name: string };
  mainImage: { asset: { url: string }; alt: string };
  contentImages?: Array<{ asset: { url: string }; alt: string; caption: string }>;
  content: string;
  references: Array<{ title: string; url: string }>;
}> = {
  "cybersecurity-practices-small-business": {
    title: "Essential Cybersecurity Practices for Small Businesses",
    publishedAt: "2024-12-15",
    author: { name: "Cybervists Team" },
    mainImage: {
      asset: { url: "/assets/blog/cybersecurity-business.jpg" },
      alt: "Cybersecurity for small business"
    },
    contentImages: [
      {
        asset: { url: "/assets/blog/password-manager.jpg" },
        alt: "Password manager interface",
        caption: "Modern password managers help maintain unique, secure passwords"
      },
      {
        asset: { url: "/assets/blog/backup-strategy.jpg" },
        alt: "Data backup visualization",
        caption: "A robust backup strategy includes both local and cloud solutions"
      }
    ],
    content: `Small businesses are increasingly becoming targets for cybercriminals. Here are the essential practices every small business should implement:

## 1. Strong Password Policies
Implement comprehensive password policies that require complex passwords and regular updates. Consider using password managers to help employees maintain secure, unique passwords for all accounts.

## 2. Regular Software Updates
Keep all software, operating systems, and applications up to date. Enable automatic updates where possible to ensure you receive the latest security patches.

## 3. Employee Training
Regularly train employees on cybersecurity best practices, including how to identify phishing emails, safe browsing habits, and proper data handling procedures.

## 4. Backup Your Data
Implement a robust backup strategy with both local and cloud-based backups. Test your backups regularly to ensure they can be restored when needed.

## 5. Use Antivirus Software
Install reputable antivirus software on all devices and keep it updated. Consider enterprise-grade solutions that offer centralized management and monitoring.

## Conclusion
Implementing these basic cybersecurity practices can significantly reduce your risk of falling victim to cyber attacks. Remember, cybersecurity is an ongoing process, not a one-time setup.`,
    references: [
      { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
      { title: "Small Business Cybersecurity Guide - CISA", url: "https://www.cisa.gov/small-business-cybersecurity" },
      { title: "Password Security Best Practices", url: "https://owasp.org/www-project-cheat-sheets/cheatsheets/Authentication_Cheat_Sheet.html" },
      { title: "Backup and Recovery Strategies", url: "https://www.sans.org/white-papers/backup-recovery/" }
    ]
  },
  "password-security-beyond-basics": {
    title: "Password Security: Beyond the Basics",
    publishedAt: "2024-12-10",
    author: { name: "Cybervists Team" },
    mainImage: {
      asset: { url: "/assets/blog/password-security.jpg" },
      alt: "Password security concepts"
    },
    contentImages: [
      {
        asset: { url: "/assets/blog/mfa-setup.jpg" },
        alt: "Multi-factor authentication setup",
        caption: "Setting up MFA adds crucial security layers to your accounts"
      }
    ],
    content: `Password security goes far beyond just creating a complex password. Here's what you need to know:

## Multi-Factor Authentication (MFA)
MFA adds an extra layer of security by requiring additional verification beyond just your password. This could be a text message, authenticator app, or biometric verification.

## Password Managers
Password managers generate and store unique, complex passwords for all your accounts. Popular options include 1Password, Bitwarden, and LastPass.

## Creating Strong Passwords
Use a combination of uppercase and lowercase letters, numbers, and special characters. Avoid personal information and common words.

## Regular Password Updates
Change passwords regularly, especially for sensitive accounts. Immediately update passwords if you suspect they may have been compromised.

## Conclusion
Strong password security is your first line of defense against cyber threats. Implement these practices to significantly improve your digital security.`,
    references: [
      { title: "OWASP Authentication Cheat Sheet", url: "https://owasp.org/www-project-cheat-sheets/cheatsheets/Authentication_Cheat_Sheet.html" },
      { title: "NIST Password Guidelines", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { title: "Password Manager Comparison", url: "https://www.security.org/how-secure-is-my-password/" }
    ]
  },
  "phishing-attacks-recognition-prevention": {
    title: "Phishing Attacks: How to Recognize and Avoid Them",
    publishedAt: "2024-12-05",
    author: { name: "Cybervists Team" },
    mainImage: {
      asset: { url: "/assets/blog/phishing-prevention.jpg" },
      alt: "Phishing attack prevention"
    },
    content: `Phishing attacks remain one of the most common and effective cyber threats. Understanding how to recognize and avoid them is crucial for digital safety.

## What is Phishing?
Phishing is a cybercrime where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data.

## Common Phishing Tactics
Attackers use various methods including fake emails, malicious websites, SMS messages, and social media messages to trick victims.

## Red Flags to Watch For
Look out for urgent language, suspicious sender addresses, unexpected attachments, and requests for sensitive information.

## How to Protect Yourself
Verify sender authenticity, avoid clicking suspicious links, use email filters, and report phishing attempts to relevant authorities.

## Conclusion
Staying vigilant and educated about phishing tactics is your best defense against these increasingly sophisticated attacks.`,
    references: [
      { title: "Anti-Phishing Working Group", url: "https://apwg.org/" },
      { title: "FTC Phishing Scams Guide", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" },
      { title: "CISA Phishing Guidance", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" }
    ]
  },
  "digital-privacy-modern-age": {
    title: "Digital Privacy in the Modern Age",
    publishedAt: "2024-11-28",
    author: { name: "Cybervists Team" },
    mainImage: {
      asset: { url: "/assets/blog/digital-privacy.jpg" },
      alt: "Digital privacy protection"
    },
    contentImages: [
      {
        asset: { url: "/assets/blog/backup-strategy.jpg" },
        alt: "Privacy settings interface",
        caption: "Proper privacy settings are essential for protecting personal data"
      },
      {
        asset: { url: "/assets/blog/mfa-setup.jpg" },
        alt: "Data encryption visualization",
        caption: "End-to-end encryption protects data in transit and at rest"
      }
    ],
    content: `In today's interconnected world, digital privacy has become more important than ever. With data breaches, surveillance, and privacy violations making headlines regularly, understanding how to protect your personal information online is crucial for everyone.

## The Current State of Digital Privacy
Every day, we generate massive amounts of digital data through our online activities. From social media posts and search queries to location data and purchase history, our digital footprints reveal intimate details about our lives, preferences, and behaviors.

## Understanding Data Collection
Companies collect data through various means including cookies, tracking pixels, device fingerprinting, and direct user input. This data is often used for targeted advertising, product improvement, and sometimes sold to third parties.

## Major Privacy Threats
The digital landscape presents numerous privacy risks including data breaches, identity theft, surveillance capitalism, government monitoring, and social engineering attacks. Understanding these threats is the first step in protecting yourself.

## Privacy Laws and Regulations
Various jurisdictions have implemented privacy laws such as GDPR in Europe, CCPA in California, and similar regulations worldwide. These laws give individuals more control over their personal data and impose obligations on organizations handling personal information.

## Essential Privacy Tools
Virtual Private Networks (VPNs) encrypt your internet connection and hide your IP address. Tor browser provides anonymous web browsing. Encrypted messaging apps like Signal protect your communications. Privacy-focused search engines like DuckDuckGo don't track your searches.

## Social Media Privacy
Social media platforms collect vast amounts of personal data. Review and adjust your privacy settings regularly, limit the personal information you share, be cautious about location sharing, and consider the long-term implications of your posts.

## Email and Communication Security
Use encrypted email services, enable two-factor authentication, be cautious with email attachments and links, and consider using temporary email addresses for one-time registrations.

## Mobile Device Privacy
Smartphones collect extensive data about your location, contacts, and usage patterns. Review app permissions regularly, disable unnecessary location services, use app-specific passwords, and keep your device software updated.

## Financial Privacy
Protect your financial information by using secure payment methods, monitoring your accounts regularly, being cautious with public Wi-Fi for financial transactions, and considering privacy-focused payment options.

## The Future of Digital Privacy
Emerging technologies like artificial intelligence, Internet of Things devices, and biometric authentication present new privacy challenges. Staying informed about these developments and their privacy implications is crucial.

## Building a Privacy-First Mindset
Developing good privacy habits requires ongoing effort and education. Regularly review your digital footprint, stay informed about privacy news and developments, and make privacy-conscious decisions in your daily digital activities.

## Conclusion
Digital privacy is not about having something to hide; it's about maintaining control over your personal information and protecting yourself from potential harm. By implementing the strategies outlined in this guide and staying vigilant about your digital privacy, you can significantly reduce your exposure to privacy risks while still enjoying the benefits of our connected world.`,
    references: [
      { title: "Electronic Frontier Foundation Privacy Guide", url: "https://www.eff.org/issues/privacy" },
      { title: "Privacy International Resources", url: "https://privacyinternational.org/" },
      { title: "GDPR Official Text", url: "https://gdpr-info.eu/" },
      { title: "California Consumer Privacy Act", url: "https://oag.ca.gov/privacy/ccpa" },
      { title: "Mozilla Privacy Not Included", url: "https://foundation.mozilla.org/en/privacynotincluded/" },
      { title: "Tor Project", url: "https://www.torproject.org/" },
      { title: "Signal Messenger", url: "https://signal.org/" },
      { title: "DuckDuckGo Privacy", url: "https://duckduckgo.com/privacy" },
      { title: "ProtonMail Security Features", url: "https://proton.me/mail/security" },
      { title: "VPN Comparison Guide", url: "https://www.privacyguides.org/en/vpn/" },
      { title: "Digital Rights Foundation", url: "https://digitalrightsfoundation.pk/" },
      { title: "Center for Democracy & Technology", url: "https://cdt.org/" },
      { title: "Future of Privacy Forum", url: "https://fpf.org/" },
      { title: "International Association of Privacy Professionals", url: "https://iapp.org/" },
      { title: "Privacy Tools Guide", url: "https://www.privacytools.io/" }
    ]
  },
  "secure-remote-work-best-practices": {
    title: "Secure Remote Work: Best Practices for Teams",
    publishedAt: "2024-11-20",
    author: { name: "Cybervists Team" },
    mainImage: {
      asset: { url: "/assets/blog/remote-work-security.jpg" },
      alt: "Remote work security"
    },
    contentImages: [
      {
        asset: { url: "/assets/blog/password-manager.jpg" },
        alt: "VPN connection interface",
        caption: "VPN connections secure remote work communications"
      }
    ],
    content: `The shift to remote work has fundamentally changed how organizations approach cybersecurity. With employees accessing company resources from various locations and devices, implementing robust security measures has become more critical than ever.

## The Remote Work Security Challenge
Remote work introduces numerous security vulnerabilities including unsecured home networks, personal device usage, increased phishing attempts, and challenges in monitoring and controlling access to sensitive data.

## Establishing Secure Network Connections
Virtual Private Networks (VPNs) create encrypted tunnels between remote devices and company networks. Implement enterprise-grade VPN solutions with strong encryption protocols, multi-factor authentication, and regular security audits.

## Device Security and Management
Implement Mobile Device Management (MDM) solutions to control and monitor devices accessing company resources. Establish clear policies for personal device usage, require regular security updates, and implement remote wipe capabilities for lost or stolen devices.

## Identity and Access Management
Implement Zero Trust security models that verify every user and device before granting access. Use single sign-on (SSO) solutions, enforce strong password policies, and implement role-based access controls to limit data exposure.

## Secure Communication Channels
Use encrypted communication platforms for sensitive discussions, implement secure file sharing solutions, establish clear guidelines for email usage, and provide training on identifying and reporting suspicious communications.

## Home Network Security
Educate employees about securing their home networks including changing default router passwords, enabling WPA3 encryption, keeping firmware updated, and separating work devices from personal IoT devices.

## Data Protection and Backup
Implement cloud-based backup solutions, establish clear data classification policies, use encryption for data at rest and in transit, and provide secure cloud storage solutions for work-related files.

## Employee Training and Awareness
Regular security awareness training is crucial for remote workers. Cover topics including phishing recognition, secure password practices, safe browsing habits, and incident reporting procedures.

## Monitoring and Incident Response
Implement security monitoring tools that can detect unusual activity across distributed networks, establish clear incident response procedures for remote work scenarios, and conduct regular security assessments.

## Compliance and Legal Considerations
Ensure remote work policies comply with relevant regulations, implement data residency controls, maintain audit trails for compliance reporting, and establish clear policies for cross-border data transfers.

## Physical Security Measures
Educate employees about physical security including securing workspaces, using privacy screens, properly disposing of sensitive documents, and being aware of shoulder surfing in public spaces.

## Technology Infrastructure
Invest in cloud-based security solutions that can scale with remote work needs, implement endpoint detection and response (EDR) tools, and ensure adequate bandwidth and redundancy for critical business operations.

## Creating a Security Culture
Foster a culture where security is everyone's responsibility, encourage reporting of security incidents without fear of punishment, recognize and reward good security practices, and regularly communicate security updates and threats.

## Future-Proofing Remote Work Security
Stay informed about emerging threats and technologies, regularly review and update security policies, conduct penetration testing and vulnerability assessments, and plan for evolving work arrangements.

## Conclusion
Secure remote work requires a comprehensive approach that combines technology, policies, and human factors. By implementing these best practices and maintaining a proactive security posture, organizations can enable productive remote work while protecting their valuable assets and data.`,
    references: [
      { title: "NIST Remote Work Security Guide", url: "https://www.nist.gov/blogs/cybersecurity-insights/telework-cybersecurity-considerations" },
      { title: "CISA Remote Work Guidance", url: "https://www.cisa.gov/news-events/news/cisa-guidance-essential-critical-infrastructure-workers" },
      { title: "SANS Remote Work Security", url: "https://www.sans.org/white-papers/remote-work-security/" },
      { title: "Zero Trust Architecture - NIST", url: "https://www.nist.gov/publications/zero-trust-architecture" },
      { title: "VPN Security Best Practices", url: "https://www.ncsc.gov.uk/guidance/virtual-private-networks" },
      { title: "Mobile Device Management Guide", url: "https://www.nist.gov/publications/guidelines-managing-use-mobile-devices-federal-information-systems" },
      { title: "Endpoint Security Framework", url: "https://www.mitre.org/publications/technical-papers/endpoint-security" },
      { title: "Cloud Security Alliance", url: "https://cloudsecurityalliance.org/" },
      { title: "Remote Work Compliance Guide", url: "https://www.isaca.org/resources/isaca-journal/issues/2020/volume-4/remote-work-compliance-considerations" },
      { title: "Secure Communications Guide", url: "https://www.eff.org/deeplinks/2020/03/what-you-should-know-about-online-tools-during-covid-19-crisis" }
    ]
  },
  "social-media-security-protection": {
    title: "Social Media Security: Protecting Your Online Presence",
    publishedAt: "2024-11-15",
    author: { name: "Cybervists Team" },
    mainImage: {
      asset: { url: "/assets/blog/social-media-security.jpg" },
      alt: "Social media security"
    },
    content: `Social media platforms have become integral to our personal and professional lives, but they also present significant security and privacy risks. Understanding how to protect yourself on these platforms is essential for maintaining your digital safety.

## Common Social Media Threats
Social media platforms are targets for various threats including account takeovers, identity theft, social engineering attacks, malware distribution, and privacy violations through excessive data collection.

## Privacy Settings and Controls
Regularly review and update your privacy settings on all social media platforms. Limit who can see your posts, control who can contact you, disable location tracking when not needed, and review third-party app permissions.

## Safe Sharing Practices
Be mindful of what you share online. Avoid posting sensitive personal information, be cautious about location sharing, think before posting photos that reveal personal details, and consider the long-term implications of your posts.

## Recognizing and Avoiding Scams
Social media scams are increasingly sophisticated. Be wary of too-good-to-be-true offers, verify friend requests from people you know, be cautious of links and attachments, and report suspicious activity.

## Account Security Measures
Use strong, unique passwords for each social media account, enable two-factor authentication wherever possible, regularly review login activity, and be cautious when accessing accounts from public devices.

## Protecting Your Professional Reputation
Your social media presence can impact your professional life. Maintain appropriate boundaries between personal and professional content, regularly audit your online presence, and consider using separate accounts for different purposes.

## Dealing with Cyberbullying and Harassment
Know how to report and block abusive users, document harassment for potential legal action, seek support from platform moderators and law enforcement when necessary, and protect your mental health by limiting exposure to negative content.

## Children and Social Media Safety
If you have children using social media, educate them about online safety, monitor their activity appropriately, set clear rules and boundaries, and maintain open communication about their online experiences.

## Conclusion
Social media security requires ongoing vigilance and proactive measures. By implementing these practices and staying informed about emerging threats, you can enjoy the benefits of social media while protecting your privacy and security.`,
    references: [
      { title: "Social Media Security Guide - CISA", url: "https://www.cisa.gov/news-events/news/social-media-cybersecurity-tips" },
      { title: "Facebook Privacy Settings", url: "https://www.facebook.com/privacy/explanation" },
      { title: "Twitter Security Best Practices", url: "https://help.twitter.com/en/safety-and-security" }
    ]
  }
};

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = samplePosts[slug];

  if (!post) {
    return (
      <main className="w-full md:w-[1440px] min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <article className="w-full md:w-[1440px] min-h-screen bg-white">
      {/* Navigation */}
      <section className="py-8 px-4 md:px-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="w-4 h-4" />
              {post.author?.name}
            </div>
            <BlogPostClient title={post?.title || "Cybervists Article"} />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage?.asset?.url && (
        <section className="px-4 md:px-16 mb-12">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={800}
              height={400}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="px-4 md:px-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {post.content ? (
              <div className="whitespace-pre-line relative">
                {/* Embedded Image */}
                {post.contentImages && post.contentImages[0] && (
                  <div className="float-right ml-6 mb-4 w-80 max-w-sm">
                    <Image
                      src={post.contentImages[0].asset.url}
                      alt={post.contentImages[0].alt}
                      width={320}
                      height={200}
                      className="w-full rounded-lg shadow-md"
                    />
                    {post.contentImages[0].caption && (
                      <p className="text-xs text-gray-500 mt-2 italic">
                        {post.contentImages[0].caption}
                      </p>
                    )}
                  </div>
                )}
                
                {post.content.split('\n\n').map((paragraph, index: number) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 clear-both">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-6">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  return (
                    <p key={index} className="mb-6 text-base leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-600">
                No content available for this article.
              </p>
            )}
          </div>

          {/* Remaining Content Images */}
          {post.contentImages && post.contentImages.length > 1 && (
            <div className="mt-12 space-y-8">
              {post.contentImages.slice(1).map((image, index: number) => (
                <div key={index} className="max-w-md mx-auto">
                  <Image
                    src={image.asset.url}
                    alt={image.alt}
                    width={400}
                    height={250}
                    className="w-full rounded-lg shadow-md"
                  />
                  {image.caption && (
                    <p className="text-sm text-gray-500 mt-2 italic text-center">
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* References */}
          {post.references && post.references.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">References</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {post.references.map((ref, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <ExternalLink className="w-3 h-3 text-primary-600 mt-1 flex-shrink-0" />
                      <a 
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Explore More Articles
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Discover more cybersecurity insights and best practices to keep your digital life secure.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Articles
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </article>
  );
}
