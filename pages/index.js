import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import Nav_index from '../components/nav_index';

const Home = () => {

  useEffect(() => {
    async function fetchData() {
      window.localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
    }
    fetchData();

  });

  return (
    <div className="warp-index">

      <Head>
        <title>Eldery DB</title>
        <link rel='icon' href='/static/logomain.svg' />
      </Head>
      <React.Fragment>
        <Nav_index name="/" />
        <Cover />
      </React.Fragment>

    </div>
  )
}
export default Home;