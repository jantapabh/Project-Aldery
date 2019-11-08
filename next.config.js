const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')
module.exports = withLess(withSass({
    lessLoaderOptions: {
        javascriptEnabled: true
    }
}))