import React from "react"

import Layout from "@layouts/layout"

class ProjectTemplate extends React.Component {
  // Render
  render() {
    // Alias data to props
    const { ...data } = { ...this.props.data.contentfulProject }

    return (
      <Layout>
        <h1>{data.title}</h1>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
    }
  }
`
