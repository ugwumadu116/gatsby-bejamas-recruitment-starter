import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

export function IndexPageTemplate({}) {
  return (
    <>
      <h1>Index Pagee</h1>
      <Hero />
    </>
  )
}

IndexPageTemplate.propTypes = {}

function IndexPage() {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {}

export default IndexPage
