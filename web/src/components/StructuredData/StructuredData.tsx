import React from 'react'

import { SITE_CONFIG, PROFESSIONAL_INFO, CONTACT_INFO } from '../../lib/constants'

interface StructuredDataProps {
  type?: 'person' | 'website'
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'person' }) => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lisa Yip',
    jobTitle: PROFESSIONAL_INFO.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    sameAs: [
      CONTACT_INFO.linkedin,
      CONTACT_INFO.github
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Instrument'
      },
      {
        '@type': 'Organization',
        name: 'FullStory'
      },
      {
        '@type': 'Organization',
        name: 'Patreon'
      },
      {
        '@type': 'Organization',
        name: 'Dropbox'
      }
    ],
    knowsAbout: PROFESSIONAL_INFO.skills,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US'
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: 'Lisa Yip'
    }
  }

  const schema = type === 'person' ? personSchema : websiteSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

export default StructuredData
