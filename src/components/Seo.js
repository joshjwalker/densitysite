import React from "react"

const Seo = ({ title, description }) => {
  const siteTitle = "Swarm Runner"
  const defaultDescription =
    "An AI-powered collaboration platform that collapses the distance between product vision and shipped code."

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
