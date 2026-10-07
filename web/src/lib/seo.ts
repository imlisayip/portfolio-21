import { SITE_CONFIG, SEO_META, OPEN_GRAPH, TWITTER_CARD } from './constants'

export const generateMetaTags = (path = '') => {
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    author: SITE_CONFIG.author,
    canonical: url,
    openGraph: {
      type: OPEN_GRAPH.type,
      url,
      title: OPEN_GRAPH.title,
      description: OPEN_GRAPH.description,
      image: OPEN_GRAPH.image,
      siteName: OPEN_GRAPH.siteName
    },
    twitter: {
      card: TWITTER_CARD.card,
      url,
      title: TWITTER_CARD.title,
      description: TWITTER_CARD.description,
      image: TWITTER_CARD.image
    }
  }
}

export const generatePageMetaTags = (pageTitle?: string, pageDescription?: string, path = '') => {
  const baseMeta = generateMetaTags(path)
  const title = pageTitle ? `${pageTitle} | ${SITE_CONFIG.title}` : SITE_CONFIG.title
  const description = pageDescription || SITE_CONFIG.description

  return {
    title,
    description,
    keywords: SITE_CONFIG.keywords,
    author: SITE_CONFIG.author,
    canonical: baseMeta.canonical,
    openGraph: {
      ...baseMeta.openGraph,
      title,
      description
    },
    twitter: {
      ...baseMeta.twitter,
      title,
      description
    }
  }
}
