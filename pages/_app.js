import React from 'react';
import '../styles/base.scss';
import 'antd/dist/antd.less';
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from "react-redux";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default withReduxStore(MyApp)