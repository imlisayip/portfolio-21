import { SITE_CONFIG, SEO_META, OPEN_GRAPH, TWITTER_CARD } from './constants'

export const generateMetaTags = () => {
  return {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    author: SITE_CONFIG.author,
    canonical: SITE_CONFIG.url,
    openGraph: {
      type: OPEN_GRAPH.type,
      url: OPEN_GRAPH.url,
      title: OPEN_GRAPH.title,
      description: OPEN_GRAPH.description,
      image: OPEN_GRAPH.image,
      siteName: OPEN_GRAPH.siteName
    },
    twitter: {
      card: TWITTER_CARD.card,
      url: TWITTER_CARD.url,
      title: TWITTER_CARD.title,
      description: TWITTER_CARD.description,
      image: TWITTER_CARD.image
    }
  }
}

export const generatePageMetaTags = (pageTitle?: string, pageDescription?: string) => {
  const baseMeta = generateMetaTags()

  return {
    title: pageTitle ? `${pageTitle} | ${SITE_CONFIG.title}` : SITE_CONFIG.title,
    description: pageDescription || SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    author: SITE_CONFIG.author,
    canonical: SITE_CONFIG.url,
    openGraph: {
      ...baseMeta.openGraph,
      title: pageTitle ? `${pageTitle} | ${SITE_CONFIG.title}` : SITE_CONFIG.title,
      description: pageDescription || SITE_CONFIG.description
    },
    twitter: {
      ...baseMeta.twitter,
      title: pageTitle ? `${pageTitle} | ${SITE_CONFIG.title}` : SITE_CONFIG.title,
      description: pageDescription || SITE_CONFIG.description
    }
  }
}
