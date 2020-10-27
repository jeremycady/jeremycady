import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactForm from "../components/contactform";

const Contact = () => {
  return (
  <Layout>
    <SEO title="Contact Page" />
    <div className="site-container">
      <div className="container">
        <ContactForm />
      </div>
    </div>
  </Layout>
)};

export default Contact;