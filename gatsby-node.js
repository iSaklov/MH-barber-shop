exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/*',
    toPath: '/',
    isPermanent: true,
    redirectInBrowser: true
  })
}
