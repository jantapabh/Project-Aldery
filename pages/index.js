import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Cover from '../components/cover';
import NavBar from '../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import About from '../components/about';
import Info from '../components/info';
import Footer from '../components/footer';
import Agency from '../components/agency';


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
      { name: "เกี่ยวกับเรา", href: "" },
      { name: "ข่าวสาร", href: "" },
      { name: "ติดต่อ", href: "/index/contact" },
      { name: "เข้าสู่ระบบ", href: "/main" },
    ]
  )

  return (
    <div className="warp-index">
      <Head>
        <title>Eldery DB</title>
        <link rel='icon' href='/static/logomain.svg' />
      </Head>
      <React.Fragment>
        <NavBar name="index" tab={isSmallScreen ? homeMin : home} />
        <Cover />
        <About />
        <Agency />
        <Info />
        <Footer />
      </React.Fragment>

    </div>
  )
}
export default Home;