import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query AboutMeQuery {
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
        }
      }
    `}
    
    render={data => (
      <Layout>
          <SEO title="About Page" />
          <div className="about section" id="About">
          <div className="container">
            <div className="about-main row">
              <div className="left col-md-5 col-lg-4 mb-3">
                <Img
                  fixed={data.contentfulAboutMe.photo.fluid}
                  objectFit="cover"
                  objectPosition="top center"
                />
              </div>
              <div className="left col-md-7 col-lg-8">
                <div className="about-details">
                  {/* <span className="name">My Name is {data.name}.</span> */}
                  <h2 className="sub-position">
                    I'm {data.contentfulAboutMe.designation}.
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.contentfulAboutMe.description.childMarkdownRemark.html
                    }}
                  />
                  <ul className="details">
                    <li>
                      <strong>Full Name</strong>
                      <p>{data.contentfulAboutMe.name}</p>
                    </li>
                    {/* <li>
                      <strong>Age</strong>
                      <p>{data.age} Years</p>
                    </li> */}
                    <li>
                      <strong>Location</strong>
                      <p>{data.contentfulAboutMe.location}</p>
                    </li>
                    {/* <li>
                      <strong>Email</strong>
                      <p>
                        <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                      </p>
                    </li> */}
                  </ul>
                  <div className="socials">
                    <ul>
                      <li>
                        <a
                          className="fab fa-facebook-f"
                          href={data.contentfulAboutMe.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fab fa-twitter"
                          href={data.contentfulAboutMe.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      {/* <li>
                        <a
                          className="fab fa-instagram"
                          href={data.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li> */}
                      <li>
                        <a
                          className="fab fa-linkedin-in"
                          href={data.contentfulAboutMe.linkdin}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fab fa-github"
                          href={data.contentfulAboutMe.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default About;