module.exports = {
  exportPathMap:() => ({
    '/': {page: '/'},
    '/main' : {page:'/main'},
    '/about' : {page:'/about'},
    '/service' : {page:'/service'},
    '/mantable' : {page:'/mantable'},
    '/womantable' : {page:'/womantable'},
    
  })
}


const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})