const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Contentful graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const contentfulData = await graphql(
    `query {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `
  ).catch(e => {
    throw e;
  });

  // Create "/work" pages
  const projectTemplate = path.resolve(`./src/templates/project/index.js`);
  _.each(contentfulData.data.allContentfulProject.nodes, project => {
    createPage({
      path: `/work/${project.slug}/`,
      component: slash(projectTemplate),
      context: {
        slug: project.slug,
      },
    })
  });
}
