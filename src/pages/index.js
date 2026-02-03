import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Assumption from "../components/Assumption"
import TwoKinds from "../components/TwoKinds"
import Process from "../components/Process"
import AICompany from "../components/AICompany"
import Numbers from "../components/Numbers"
import WorkWith from "../components/WorkWith"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Assumption />
      <TwoKinds />
      <Process />
      <AICompany />
      <Numbers />
      <WorkWith />
      <CTA />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title="Software Development Velocity" />
)
