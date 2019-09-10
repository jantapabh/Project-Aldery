module.exports = {
  exportPathMap:() => ({
    '/': {page: '/'},
    '/main' : {page:'/main'},
    '/about' : {page:'/about'},
    
  })
}


const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})