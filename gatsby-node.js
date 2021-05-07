const path = require('path')

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/npmpage.js')
    const res = await graphql(`
      query {
      allNpmPackage(
        filter: {keywords: {in: "Centre for Information Modelling"}}
        sort: {fields: modified, order: DESC}
      ) {
        edges {
          node {
            slug
            name
            keywords
            tags {
              latest
            }
            title
            downloadsLast30Days
            description
            modified(fromNow: true)
            created(formatString: "DD MM YYYY")
            homepage
          }
        }
      }
    }
    `)

    res.data.allNpmPackage.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/npm${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/search/)) {
    page.matchPath = "/search/*"

    // Update the page.
    createPage(page)
  }
}