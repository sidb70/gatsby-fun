import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo'

const Homepage = () =>{
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src='../images/mackinac.JPG'
        alt='Mackinac Island, 2021'
        placeholder='blurred'
      />
      <p></p>
      <StaticImage 
        src='../images/philmont.JPG'
        alt='Mackinac Island, 2021'
        placeholder='blurred'
      />
    </Layout>
  )
};

export const Head = () => <Seo title="Home Page" />

export default Homepage;
