import React from 'react'
import '../styles/base.scss'
import 'antd/dist/antd.less'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}