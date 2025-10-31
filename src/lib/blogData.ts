import { Post } from "@/types";

// amazonq-ignore-next-line
const blogPosts: Post[] = [];

// // Sample blog data - replace with actual API calls
// const blogPosts: Post[] = [
//   {
//     _id: "1",
//     title: "Essential Cybersecurity Practices for Small Businesses",
//     slug: { current: "cybersecurity-practices-small-business" },
//     excerpt:
//       "Learn the fundamental cybersecurity practices every small business should implement to protect against cyber threats.",
//     publishedAt: "2024-12-15",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img1", url: "/assets/cybersecurity_action.png" },
//       alt: "Cybersecurity for small business",
//     },
//     contentImages: [
//       {
//         asset: { url: "/assets/cybersecurity_action.png" },
//         alt: "Cybersecurity action plan",
//         caption:
//           "A comprehensive cybersecurity action plan is essential for business protection",
//       },
//       {
//         asset: { url: "/assets/cybersecurity_action.png" },
//         alt: "Security framework visualization",
//         caption: "Visual representation of layered security approach",
//       },
//     ],
//     content: `Small businesses are increasingly becoming prime targets for cybercriminals, with 43% of cyber attacks targeting small to medium-sized enterprises. The misconception that "we're too small to be targeted" has left many businesses vulnerable to devastating attacks.

// ## The Growing Threat Landscape

// The cybersecurity threat landscape has evolved dramatically over the past decade. Cybercriminals have shifted their focus from large corporations with robust security measures to smaller businesses that often lack comprehensive cybersecurity infrastructure.

// Small businesses are attractive targets because they often have valuable data but limited security resources. Customer information, financial records, intellectual property, and business communications are all valuable assets that cybercriminals seek to exploit.

// ## 1. Implementing Strong Password Policies

// Password security forms the foundation of any cybersecurity strategy. Weak passwords are responsible for 81% of data breaches, making this the most critical area to address immediately. A comprehensive password policy should mandate minimum password lengths of 12-16 characters.

// Employees should be required to use unique passwords for each business account and system. Password reuse across multiple platforms creates a domino effect where one compromised account can lead to multiple security breaches.

// ## 2. Multi-Factor Authentication (MFA)

// Multi-factor authentication adds crucial layers of security beyond passwords. Even if a password is compromised, MFA can prevent unauthorized access by requiring additional verification methods.

// Choose authentication methods appropriate for your business needs. SMS-based authentication, while better than passwords alone, is vulnerable to SIM swapping attacks. App-based authenticators like Google Authenticator provide better security.

// ## 3. Regular Software Updates and Patch Management

// Outdated software represents one of the most common attack vectors. Cybercriminals actively scan for known vulnerabilities in popular software applications and operating systems.

// Create an inventory of all software and systems in your organization. Prioritize updates based on criticality and exposure risk. Security patches should be applied immediately, while feature updates can be scheduled during maintenance windows.

// ## 4. Employee Training and Awareness Programs

// Human error accounts for approximately 95% of successful cyber attacks, making employee education your most important security investment. Develop comprehensive training programs that cover phishing recognition, safe browsing practices, and social engineering awareness.

// Phishing attacks have become increasingly sophisticated, often mimicking legitimate communications from trusted sources. Train employees to verify sender authenticity through independent channels and scrutinize email attachments and links.

// ## Conclusion

// Implementing comprehensive cybersecurity practices requires commitment, resources, and ongoing attention. However, the cost of prevention is significantly lower than the cost of recovery from a successful attack.`,
//     references: [
//       {
//         title: "NIST Cybersecurity Framework",
//         url: "https://www.nist.gov/cyberframework",
//       },
//       {
//         title: "Small Business Cybersecurity Guide - CISA",
//         url: "https://www.cisa.gov/small-business-cybersecurity",
//       },
//     ],
//   },
//   {
//     _id: "2",
//     title: "Password Security: Beyond the Basics",
//     slug: { current: "password-security-beyond-basics" },
//     excerpt:
//       "Discover advanced password security techniques that go beyond creating complex passwords.",
//     publishedAt: "2024-12-10",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img2", url: "/assets/security_awareness.jpg" },
//       alt: "Password security concepts",
//     },
//     content: `Password security goes far beyond just creating a complex password. Here's what you need to know:

// ## Multi-Factor Authentication (MFA)
// MFA adds an extra layer of security by requiring additional verification.

// ## Password Managers
// Password managers generate and store unique, complex passwords.`,
//     references: [
//       {
//         title: "OWASP Authentication Cheat Sheet",
//         url: "https://owasp.org/www-project-cheat-sheets/cheatsheets/Authentication_Cheat_Sheet.html",
//       },
//     ],
//   },
//   {
//     _id: "3",
//     title: "Phishing Attacks: How to Recognize and Avoid Them",
//     slug: { current: "phishing-attacks-recognition-prevention" },
//     excerpt:
//       "Learn to identify and protect yourself from increasingly sophisticated phishing attacks.",
//     publishedAt: "2024-12-05",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img3", url: "/assets/cybersecurity_action.png" },
//       alt: "Phishing attack prevention",
//     },
//     content: `Phishing attacks remain one of the most common cyber threats. Understanding recognition and prevention is crucial.

// ## What is Phishing?
// Phishing is a cybercrime where attackers impersonate legitimate organizations.

// ## Common Tactics
// Attackers use fake emails, malicious websites, and social media messages.`,
//     references: [
//       { title: "Anti-Phishing Working Group", url: "https://apwg.org/" },
//     ],
//   },
//   {
//     _id: "4",
//     title: "Digital Privacy in the Modern Age: A Comprehensive Guide",
//     slug: { current: "digital-privacy-modern-age" },
//     excerpt:
//       "Understand your digital footprint and learn practical steps to protect your personal information in our hyper-connected world.",
//     publishedAt: "2024-11-28",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img4", url: "/assets/security_awareness.jpg" },
//       alt: "Digital privacy protection",
//     },
//     contentImages: [
//       {
//         asset: { url: "/assets/cybersecurity_action.png" },
//         alt: "Privacy protection strategies",
//         caption:
//           "Implementing comprehensive privacy protection requires multiple layers of security",
//       },
//       {
//         asset: { url: "/assets/security_awareness.jpg" },
//         alt: "Data flow visualization",
//         caption: "Understanding how your data flows through digital ecosystems",
//       },
//     ],
//     content: `In our hyper-connected digital age, privacy has become both more important and more challenging to maintain than ever before. Every click, search, purchase, and interaction leaves digital traces that paint an increasingly detailed picture of our lives, preferences, and behaviors.

// ## The Current State of Digital Privacy

// The digital privacy landscape has fundamentally shifted over the past two decades. What began as simple website cookies has evolved into sophisticated tracking ecosystems that follow users across devices, platforms, and even offline activities.

// Major technology companies have built business models entirely around data collection and targeted advertising. Google processes over 8.5 billion searches daily, Facebook serves over 2.9 billion monthly active users, and Amazon tracks purchasing behaviors across millions of customers.

// The value of personal data has created what Harvard Business School professor Shoshana Zuboff calls "surveillance capitalism" – an economic system built on the extraction of human experience as raw material for behavioral data.

// ## Understanding Modern Data Collection Methods

// Data collection has evolved far beyond simple cookies and form submissions. Modern tracking techniques include device fingerprinting, which creates unique identifiers based on your device's characteristics like screen resolution, installed fonts, and browser plugins.

// Cross-device tracking links your activities across smartphones, tablets, laptops, and smart TVs. Companies use various techniques including shared login credentials, similar browsing patterns, and location data to connect devices to the same user.

// Location tracking through smartphones provides incredibly detailed information about daily routines, work locations, shopping habits, and social connections. This data is often shared with third-party data brokers who combine it with other information sources.

// ## Major Privacy Threats in the Digital Age

// Data breaches have become increasingly common and severe. The average cost of a data breach reached $4.45 million in 2023, but the personal cost to individuals can include identity theft, financial fraud, and long-term reputation damage.

// Identity theft has evolved beyond simple credit card fraud to include sophisticated schemes using social media information, public records, and data broker profiles. Criminals can build convincing personas using publicly available information.

// Government surveillance capabilities have expanded dramatically since 9/11, with programs like NSA's PRISM collecting vast amounts of data from technology companies. While intended for national security, these programs raise concerns about political surveillance.

// ## Essential Privacy Protection Strategies

// Browser privacy settings form the first line of defense against tracking. Modern browsers offer increasingly sophisticated privacy controls including tracking protection, cookie management, and fingerprinting resistance.

// Virtual Private Networks (VPNs) encrypt internet traffic and mask IP addresses, providing protection against network-level surveillance and geographic tracking. However, VPN selection requires careful consideration of logging policies and jurisdiction.

// Encrypted messaging applications like Signal, Wire, and Element provide end-to-end encryption that prevents even service providers from accessing message content. These tools are essential for sensitive communications.

// Privacy-focused search engines like DuckDuckGo, Startpage, and Searx don't track users or personalize results based on search history. While they may provide less personalized results, they prevent the creation of detailed profiles.

// ## Building a Privacy-First Mindset

// Effective privacy protection requires shifting from reactive to proactive thinking. Instead of asking "What's the harm in sharing this information?" consider "What's the benefit, and is it worth the privacy cost?"

// Privacy is not binary but exists on a spectrum. Different activities and information types warrant different levels of protection. Develop a personal privacy threat model that considers your specific risks, adversaries, and protection needs.

// ## Conclusion: Privacy as Digital Self-Defense

// Digital privacy is not about paranoia or having something to hide – it's about maintaining autonomy and control in an increasingly surveilled world. Just as we lock our doors and close our curtains for physical privacy, digital privacy practices are essential for psychological well-being and personal security.

// The goal is not perfect privacy, which is neither achievable nor necessary for most people, but rather informed consent about privacy trade-offs. By understanding how data collection works and what privacy tools are available, you can make conscious decisions about your digital footprint.`,
//     references: [
//       {
//         title: "Electronic Frontier Foundation Privacy Guide",
//         url: "https://www.eff.org/issues/privacy",
//       },
//       {
//         title: "Privacy International Resources",
//         url: "https://privacyinternational.org/",
//       },
//       {
//         title: "Surveillance Capitalism - Shoshana Zuboff",
//         url: "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=11237",
//       },
//     ],
//   },
//   {
//     _id: "5",
//     title: "Secure Remote Work: Best Practices for Teams",
//     slug: { current: "secure-remote-work-best-practices" },
//     excerpt:
//       "Essential security guidelines for remote teams including VPN usage and secure communication tools.",
//     publishedAt: "2024-11-20",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img5", url: "/assets/cybersecurity_action.png" },
//       alt: "Remote work security",
//     },
//     content: `The shift to remote work has fundamentally changed how organizations approach cybersecurity.

// ## VPN Security
// Virtual Private Networks create encrypted tunnels for secure remote access.

// ## Device Management
// Implement policies for personal device usage and security updates.`,
//     references: [
//       {
//         title: "NIST Remote Work Guide",
//         url: "https://www.nist.gov/blogs/cybersecurity-insights/telework-cybersecurity-considerations",
//       },
//     ],
//   },
//   {
//     _id: "6",
//     title: "Social Media Security: Protecting Your Online Presence",
//     slug: { current: "social-media-security-protection" },
//     excerpt:
//       "Learn how to secure your social media accounts and manage privacy settings effectively.",
//     publishedAt: "2024-11-15",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img6", url: "/assets/security_awareness.jpg" },
//       alt: "Social media security",
//     },
//     content: `Social media platforms present significant security and privacy risks.

// ## Privacy Settings
// Regularly review and update your privacy settings on all platforms.

// ## Safe Sharing
// Be mindful of what personal information you share online.`,
//     references: [
//       {
//         title: "CISA Social Media Tips",
//         url: "https://www.cisa.gov/news-events/news/social-media-cybersecurity-tips",
//       },
//     ],
//   },
//   {
//     _id: "7",
//     title: "Cloud Security Fundamentals",
//     slug: { current: "cloud-security-fundamentals" },
//     excerpt:
//       "Essential principles for securing your data and applications in the cloud environment.",
//     publishedAt: "2024-11-10",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img7", url: "/assets/cybersecurity_action.png" },
//       alt: "Cloud security concepts",
//     },
//     content: `Cloud computing offers many benefits but requires careful security considerations.

// ## Shared Responsibility
// Understand the shared responsibility model between you and your cloud provider.

// ## Data Encryption
// Ensure data is encrypted both in transit and at rest.`,
//     references: [
//       {
//         title: "Cloud Security Alliance",
//         url: "https://cloudsecurityalliance.org/",
//       },
//     ],
//   },
//   {
//     _id: "8",
//     title: "Mobile Device Security Best Practices",
//     slug: { current: "mobile-device-security-best-practices" },
//     excerpt:
//       "Comprehensive guide to securing your smartphones and tablets from cyber threats.",
//     publishedAt: "2024-11-05",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img8", url: "/assets/security_awareness.jpg" },
//       alt: "Mobile device security",
//     },
//     content: `Mobile devices are increasingly targeted by cybercriminals.

// ## App Security
// Only download apps from official stores and review permissions carefully.

// ## Network Security
// Be cautious when connecting to public Wi-Fi networks.`,
//     references: [
//       {
//         title: "NIST Mobile Security Guide",
//         url: "https://www.nist.gov/publications/guidelines-managing-use-mobile-devices-federal-information-systems",
//       },
//     ],
//   },
//   {
//     _id: "9",
//     title: "Incident Response Planning for Small Businesses",
//     slug: { current: "incident-response-planning-small-businesses" },
//     excerpt:
//       "How to prepare for and respond to cybersecurity incidents in your organization.",
//     publishedAt: "2024-10-30",
//     author: { name: "Cybervists Team" },
//     mainImage: {
//       asset: { _id: "img9", url: "/assets/cybersecurity_action.png" },
//       alt: "Incident response planning",
//     },
//     content: `Having an incident response plan is crucial for minimizing damage from cyber attacks.

// ## Preparation Phase
// Develop procedures and train your team before an incident occurs.

// ## Response Actions
// Know the steps to take immediately when a security incident is detected.`,
//     references: [
//       {
//         title: "SANS Incident Response Guide",
//         url: "https://www.sans.org/white-papers/incident-response/",
//       },
//     ],
//   },
// ];

// API functions - replace with actual API calls
export async function getAllPosts(): Promise<Post[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return blogPosts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return blogPosts?.find((post) => post.slug?.current === slug) || null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function getFeaturedPosts(limit: number = 3): Promise<Post[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return blogPosts?.slice(0, limit) || [];
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}
