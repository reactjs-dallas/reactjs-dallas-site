// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Layout from '../../components/layout';
import ReactDallasLogoSection from '../../components/shared/ReactDallasLogoSection';
import withRoot from '../../utils/withRoot';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    heroContainer: PropTypes.string.isRequired,
    heroText: PropTypes.string.isRequired,
    heroTitle: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  content: {
    textAlign: 'left',
    padding: '3.5rem',
  },
  heroContainer: {
    background: '#282C34',
    padding: '2rem',
  },
  heroText: {
    color: theme.palette.common.white,
    fontWeight: 100,
  },
  heroTitle: {
    color: '#61dafb',
  },
  root: {
    textAlign: 'center',
  },
});

// Component Definition
const Backers = ({ classes, data }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <section className={classes.heroContainer}>
          <header>
            <h1 className={classes.heroTitle}>Sponsors & Backers</h1>
            <div className={classes.heroText}>Where DFW supports</div>
          </header>
        </section>

        <section className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
        </section>

        <ReactDallasLogoSection />
      </div>
    </Layout>
  );
};

Backers.propTypes = propTypes;

export default withRoot(withStyles(styles)(Backers));

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
