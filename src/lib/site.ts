// Single source of truth for site-wide SEO/AEO metadata.
export const SITE = {
  url: "https://yash.vekaria.in",
  name: "Yash Vekaria",
  title: "Yash Vekaria | Front-end Software Engineer",
  description:
    "Yash Vekaria is a design-minded front-end software engineer focused on building beautiful interfaces & experiences with React, Next.js, and TypeScript.",
  email: "yashvekaria@gmail.com",
  jobTitle: "Front-end Software Engineer",
  // Static link-preview card shipped as a real .png so GitHub Pages serves it
  // with an image/png Content-Type (extensionless metadata routes are served as
  // application/octet-stream, which social scrapers reject).
  ogImage: "/og.png",
  // Real square portrait used for the schema.org Person depiction.
  headshot: "/img/headshot.jpg",
  icon: "/img/logo/logo3.png",
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
      givenName: "Yash",
      familyName: "Vekaria",
      knowsLanguage: ["en"],
      url: SITE.url,
      image: {
        "@type": "ImageObject",
        "@id": `${SITE.url}/#headshot`,
        url: `${SITE.url}${SITE.headshot}`,
        contentUrl: `${SITE.url}${SITE.headshot}`,
        width: 400,
        height: 400,
        caption: SITE.name,
      },
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
    {
      // Declares the homepage document and that it is primarily about Yash —
      // Google's canonical pattern for a personal profile page.
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#webpage`,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#person` },
      mainEntity: { "@id": `${SITE.url}/#person` },
      primaryImageOfPage: { "@id": `${SITE.url}/#headshot` },
    },
  ],
};
