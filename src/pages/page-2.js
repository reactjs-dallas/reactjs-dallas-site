// External Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import Layout from '../components/layout';

// Component Definition
const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Gatsby is neat</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
