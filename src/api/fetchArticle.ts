// src/api/mockApi.ts

export interface Article {
  id: number;
  headline: string;
  coreFactsContent: string;
  articleContent: string;
  publishedAt: string;
  author?: Author;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  imgUrl?: string;
}

// Simulate a delay to mimic real API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const dummyArticle: Article = {
  id: 1,
  headline:
    "Hackers Compromise Personal Information of 31 Million Internet Archive Users",
  author: {
    id: 1,
    name: "Allison Ing",
    bio: "Allison Ing is the editor in chief at the New York Gazzelle, writing since 2002.",
    imgUrl: "https://via.placeholder.com/150",
  },
  coreFactsContent: `
    <h1>Core Facts: Internet Archive Cyberattack</h1>
    <ul>
        <li><strong>Cyberattack on the Internet Archive:</strong> In October 2024, hackers compromised the personal information of over 31 million users of the Internet Archive, the world's largest archive of internet content.</li>
        <li><strong>Data leaked:</strong> The attack exposed user email addresses and encrypted passwords. This information was confirmed by the website "Have I Been Pwned," which tracks data breaches.</li>
        <li><strong>Temporary shutdown:</strong> Following the breach, the Internet Archive temporarily took its services offline to assess and improve security. As of Friday, most services, including the Wayback Machine, were back online.</li>
        <li><strong>Security improvements:</strong> The Internet Archive is taking a cautious approach to rebuild its security systems and ensure stronger defenses moving forward.</li>
        <li><strong>Defaced website message:</strong> After the attack, visitors saw a defaced JavaScript message on the website acknowledging the breach.</li>
        <li><strong>Prior breaches and challenges:</strong> This is the second attack on the Internet Archive since its founding in 1996, with the first occurring in May 2024. The nonprofit also faces lawsuits over its digitization of copyrighted books and music, which could impose heavy fines.</li>
        <li><strong>Brewster Kahle’s response:</strong> Internet Archive founder Brewster Kahle expressed concerns about a potential trend in cyberattacks on libraries, citing recent attacks on other major libraries.</li>
        <li><strong>Future updates:</strong> The Internet Archive has yet to provide further details on how users were affected and is working to restore services securely.</li>
    </ul>
  `,
  articleContent: `
    <p>In a significant cyberattack this month, hackers compromised the personal information of over 31 million users of the Internet Archive, the world's largest digital archive of internet content. The breach exposed user email addresses and encrypted passwords, according to "Have I Been Pwned," a website that tracks data breaches.</p>

    <p>The Internet Archive, a nonprofit organization based in San Francisco, is renowned for its mission of providing "universal access to all knowledge" through its vast digital library of websites, software, and printed materials. Despite the breach, the nonprofit confirmed that its extensive archival material remains secure.</p>

    <p>Following the attack, the Internet Archive temporarily shut down its services to assess and improve its security measures. As of Friday, many core services, including its popular Wayback Machine, were back online. The organization is taking a cautious approach to restoring other services, which will initially be available in read-only mode as they work to fully secure the platform.</p>

    <p>Visitors to the site first became aware of the breach on October 9, when a defaced JavaScript message appeared, warning users that the Internet Archive had been hacked. The message referred to "31 million of you" being affected and linked to the "Have I Been Pwned" site.</p>

    <p>In a blog post, Internet Archive founder Brewster Kahle reassured users that the organization is working around the clock to rebuild and strengthen its defenses. Kahle also noted that this is the second cyberattack the nonprofit has faced since its founding in 1996, with the first occurring earlier this year in May.</p>

    <p>The attack on the Internet Archive is part of a broader trend of cyberattacks targeting libraries. Kahle pointed out that other institutions, including the British Library, Seattle Public Library, Toronto Public Library, and Calgary Public Library, have also suffered from similar attacks recently.</p>

    <p>In addition to these cyber threats, the Internet Archive has been entangled in legal battles over its digitization of copyrighted books and music. The potential financial burden from these lawsuits, Kahle warned, could be devastating for the nonprofit.</p>

    <p>The Internet Archive has not yet released further details about the breach or its impact on individual users, but Kahle emphasized that security remains the organization's top priority as it works to restore full functionality.</p>

  `,
  publishedAt: "2021-10-01",
};

export const fetchArticle = async (): Promise<Article> => {
  await delay(500); // Simulate network latency
  return dummyArticle;
};
