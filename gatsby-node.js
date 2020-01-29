/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

/**
 * Enable absolute imports with `/src` as root.
 *
 * See: https://github.com/alampros/gatsby-plugin-resolve-src/issues/4
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@style': path.resolve(__dirname, './src/util/style'),
        '@components': path.resolve(__dirname, './src/components'),
        '@test': path.resolve(__dirname, './src/util/test'),
      },
    },
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*';

    // Update the page.
    createPage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      const posts = results.data.allMarkdownRemark.edges;
      posts.forEach(({ node }, index) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/Tests/PostLayout.tsx'),
          context: {
            slug: node.frontmatter.slug,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
          },
        });
      });
      resolve();
    });
  });
};
