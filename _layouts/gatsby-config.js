module.exports = {
  pathPrefix: `learning-hub`,
  siteMetadata: {
    title: `Foam`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
