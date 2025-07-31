// SEO and Meta Information
export const SITE_CONFIG = {
  title: 'Lisa Yip - Front End Engineer',
  description: 'Front End Engineer with experience at Instrument, FullStory, Patreon, and Dropbox. Specializing in React, TypeScript, and creating impactful user experiences.',
  keywords: 'front end engineer, react developer, typescript, user experience, web development, lisa yip',
  author: 'Lisa Yip',
  url: 'https://lisayip.com',
  siteName: 'Lisa Yip Portfolio',
  image: 'https://lisayip.com/images/lisa-yip-profile.jpg',
  themeColor: '#f5f5dc'
}

// Professional Information
export const PROFESSIONAL_INFO = {
  title: 'Front End Engineer',
  companies: ['Instrument', 'FullStory', 'Patreon', 'Dropbox'],
  skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  focus: 'creating impactful user experiences',
  location: 'San Francisco, CA'
}

// Contact Information
export const CONTACT_INFO = {
  email: 'hello@lisayip.com',
  linkedin: 'https://www.linkedin.com/in/imlisayip/',
  github: 'https://github.com/imlisayip/',
  website: 'https://lisayip.com'
}

// Social Media
export const SOCIAL_MEDIA = {
  linkedin: CONTACT_INFO.linkedin,
  github: CONTACT_INFO.github,
  website: CONTACT_INFO.website
}

// SEO Meta Tags
export const SEO_META = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  author: SITE_CONFIG.author,
  url: SITE_CONFIG.url,
  image: SITE_CONFIG.image,
  siteName: SITE_CONFIG.siteName,
  themeColor: SITE_CONFIG.themeColor
}

// Open Graph Tags
export const OPEN_GRAPH = {
  type: 'website',
  url: SITE_CONFIG.url,
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  image: SITE_CONFIG.image,
  siteName: SITE_CONFIG.siteName
}

// Twitter Card Tags
export const TWITTER_CARD = {
  card: 'summary_large_image',
  url: SITE_CONFIG.url,
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  image: SITE_CONFIG.image
} 