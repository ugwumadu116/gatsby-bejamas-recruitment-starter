import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Story from '../components/Story'

export function IndexPageTemplate({}) {
  return (
    <>
      <Hero />
      <Story />
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
