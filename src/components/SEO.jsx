import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const SEO = ({ title, description, keywords, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathname || ``}`
  }

  return (
    <>
      <html lang="fr" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      {children}
    </>
  )
}
