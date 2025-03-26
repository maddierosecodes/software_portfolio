export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maddie',
  url: 'https://maddierosecodes.com',
  image: 'https://maddierosecodes.com/profile.png',
  sameAs: [
    'https://github.com/maddierosecodese',
    'https://linkedin.com/in/maddierosejane',
    'https://facebook.com/maddierosecodes',
  ],
  jobTitle: 'Freelance Web & Software Developer',
  description:
    'Freelance Web & Software Developer based in Chorley, Lancashire, UK, serving clients worldwide. Specialising in modern web development and interactive applications.',
  worksFor: {
    '@type': 'Organization',
    name: 'MaddieRoseCodes',
    url: 'https://maddierosecodes.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chorley',
      addressRegion: 'Lancashire',
      addressCountry: 'GB',
    },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chorley',
    addressRegion: 'Lancashire',
    addressCountry: 'GB',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MaddieRoseCodes',
  url: 'https://maddierosecodes.com',
  description:
    'Freelance Web & Software Developer Portfolio - Based in Chorley, Lancashire, UK, serving clients worldwide',
  publisher: {
    '@type': 'Person',
    name: 'Maddie',
    url: 'https://maddierosecodes.com',
  },
  inLanguage: 'en-GB',
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://maddierosecodes.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    'https://maddierosecodes.co.uk',
    'https://maddierosecreates.com',
    'https://maddierosecreates.co.uk',
  ],
  areaServed: 'Worldwide',
  location: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chorley',
      addressRegion: 'Lancashire',
      addressCountry: 'GB',
    },
  },
};

export const projectsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projects | MaddieRoseCodes',
  description:
    'Explore my portfolio of web and software development projects. View case studies, technologies used, and live demos of my work. Based in Chorley, Lancashire, UK, serving clients worldwide.',
  url: 'https://maddierosecodes.com/projects',
  publisher: {
    '@type': 'Person',
    name: 'Maddie',
    url: 'https://maddierosecodes.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Web Development Projects',
    description:
      'A collection of web and software development projects showcasing various technologies and skills.',
  },
  inLanguage: 'en-GB',
  copyrightYear: new Date().getFullYear(),
  sameAs: ['https://maddierosecodes.co.uk/projects'],
  areaServed: 'Worldwide',
  location: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chorley',
      addressRegion: 'Lancashire',
      addressCountry: 'GB',
    },
  },
};
