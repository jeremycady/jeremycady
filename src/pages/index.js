import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import Blog from "../components/blog";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contactform";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Jeremy Cady`, `Frontend Developer`, `React Developer`,`Developer`]}
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Blog")
      .map(t => {
        return <Blog data={data.allContentfulBlogs}></Blog>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <ContactForm />;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulBlogs(limit: 5, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          date
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
