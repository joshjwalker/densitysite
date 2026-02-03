import React from "react"

const Seo = ({ title, description }) => {
  const siteTitle = "Density"
  const defaultDescription =
    "Software development has a new physics. We turn slow teams into fast ones."

  return (
    <>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
    </>
  )
}

export default Seo
