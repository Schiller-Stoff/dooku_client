/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/dooku_client`,
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    // source docs plugin
    {
      resolve: "gatsby-source-google-docs",
      options: {
          // https://drive.google.com/drive/folders/FOLDER_ID
          folder: "1E7dkqEliPvpzSx9IsHSuiblH5VKZLr5X",
          createPages: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`, "gatsby-remark-images",
        "gatsby-remark-gifs",  
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'none',
            theme: 'one-light'
          }
        }
      ],
      },
    },
    {
      resolve: `gatsby-source-npm-package-search`,
      options: {
        keywords: [`zim`, `dh`],
      }
    },
    ]
}
