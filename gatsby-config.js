module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `./data/`,
      },      
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/wallpaper.jpg`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired        
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require("./firebaseKey.json"),
        types: [
          {
            type: 'Project',
            collection: 'projects',
            map: i =>  ({
              slug: i.slug,
              title: i.title,
              url: i.url,
              shortDescription: i.shortDescription,
              description: i.description,
            })
          },
        ]
      }
    }
  ],
}

