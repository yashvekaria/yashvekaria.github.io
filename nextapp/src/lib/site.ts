// Single source of truth for site-wide SEO/AEO metadata.
export const SITE = {
  url: "https://yash.vekaria.in",
  name: "Yash Vekaria",
  title: "Yash Vekaria | Front-end Software Engineer",
  description:
    "Yash Vekaria is a design-minded front-end software engineer focused on building beautiful interfaces & experiences with React, Next.js, and TypeScript.",
  email: "yashvekaria@gmail.com",
  jobTitle: "Front-end Software Engineer",
  ogImage: "/img/og.png",
  icon: "/img/logo/logo1.png",
  employer: {
    name: "Avesta Technologies",
    url: "http://www.avestatechnologies.com/",
  },
  knowsAbout: [
    "Front-end Development",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "HTML",
    "CSS",
    "Sass",
    "UI/UX Design",
    "Web Performance",
    "Accessibility",
  ],
  social: {
    github: "https://github.com/yashvekaria",
    linkedin: "https://www.linkedin.com/in/yash-vekaria-71459025/",
    twitter: "https://twitter.com/yashvekaria",
    instagram: "https://www.instagram.com/yashvekaria/",
  },
} as const;

export const SAME_AS = Object.values(SITE.social);

// schema.org graph: a Person + the WebSite they own. Answer engines and
// rich results rely on this structured data to describe who the site is about.
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}${SITE.ogImage}`,
      jobTitle: SITE.jobTitle,
      email: `mailto:${SITE.email}`,
      description: SITE.description,
      worksFor: {
        "@type": "Organization",
        name: SITE.employer.name,
        url: SITE.employer.url,
      },
      knowsAbout: SITE.knowsAbout,
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE.url}/#person` },
      author: { "@id": `${SITE.url}/#person` },
    },
  ],
};
