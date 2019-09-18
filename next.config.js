module.exports = {
  exportPathMap:() => ({
    '/': {page: '/'},
    '/main' : {page:'/main'},
    '/about' : {page:'/about'},
    '/service' : {page:'/service'},
    '/mantable' : {page:'/mantable'},
    '/womantable' : {page:'/womantable'},
    '/totaltable' : {page:'/totaltable'},
    
  })
}


const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})