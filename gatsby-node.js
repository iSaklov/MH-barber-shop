exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // TODO: add redirect from 404 to home page
  createRedirect({
    fromPath: '/*',
    toPath: '/',
    isPermanent: true,
    redirectInBrowser: true
  })
}
