import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sheetapi from '../config/api';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Cover from '../components/cover';
import NavBar from '../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import About from '../components/about';
import Info from '../components/info';


const Home = () => {

  const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

  const [home, setHome] = useState(
    [
      { name: "หน้าหลัก", href: "/" },
      { name: "เกี่ยวกับเรา", href: "/" },
      { name: "ข่าวสาร", href: "/" },
      { name: "ติดต่อ", href: "/index/contact" },
      { name: "เข้าสู่ระบบ", href: "/main" }
    ]
  )

  const [homeMin, setHomeMin] = useState(
    [
      { name: "หน้าหลัก", href: "/" },
      { name: "เกี่ยวกับเรา", href: "#about" },
      { name: "ข่าวสาร", href: "#info" },
      { name: "ติดต่อ", href: "/index/contact" },
      { name: "เข้าสู่ระบบ", href: "/main" },
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
        <NavBar name="index" tab={isSmallScreen ? homeMin : home}/>
        <main>
          <Cover />
          <section id='about'>
            <About />
          </section>
          <section id='info'>
            <Info />
          </section>
        </main>
      </React.Fragment>

    </div>
  )
}
export default Home;