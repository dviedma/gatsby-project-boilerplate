import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "@layouts/layout"
import Meta from "@components/meta"

class HomePage extends React.Component {
  render() {
    const { ...data } = this.props.data.contentfulHome
    return (
      <Layout>
        <Meta title={data.title} />
        <h1 className="test">{data.title}</h1>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    contentfulHome {
      title
    }
  }
`
