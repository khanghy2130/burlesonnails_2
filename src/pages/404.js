import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHeading from '../components/MainHeading.js';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MainHeading 
	    text="Page Not Found"
	  />
  </Layout>
)

export default NotFoundPage
