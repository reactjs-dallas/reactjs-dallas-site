// Give gatsby access to env keys
require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'ReactJS Dallas',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-favicon',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sass',
  ],
};
