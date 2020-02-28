import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Sheetapi from '../config/api'
import Cover from '../components/layout/cover';
import NavBar from '../components/layout/nav';
import { useMediaQuery } from 'react-responsive'


const Home = () => {

  const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

  const [home, setHome] = useState(
    [
      { name: "หน้าหลัก", href: "/main" },
      { name: "Services", href: "/index/services" },
      { name: "Contact", href: "/index/contact" },
    ]
  )

  const [homeMin, setHomeMin] = useState(
    [
      { name: "Services", href: "/index/services" },
      { name: "Contact", href: "/index/contact" },
    ]
  )

  useEffect(() => {
    async function fetchData() {
      window.localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
    }
    fetchData();
  }, []);

  return (
    <div className="warp-index">
      <Head>
        <title>Eldery DB</title>
        <link rel='icon' href='/static/logomain.svg' />
      </Head>
      <React.Fragment>
        <NavBar name="index" tab={isSmallScreen ? homeMin : home} />
        <main>
          <Cover />
        </main>
      </React.Fragment>

    </div>
  )
}
export default Home;