import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Cover from '../components/cover';
import NavBar from '../components/layout/nav';
import { useMediaQuery } from 'react-responsive';
import About from '../components/about';
import Footer from '../components/footer';
import Agency from '../components/agency';


const Info = dynamic(
  () => import('../components/info'),
  { ssr: false }
)

const Home = () => {
  const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

  const [status, setStatus] = useState(false)

  const [home, setHome] = useState(
    [
      { name: "เกี่ยวกับเรา", href: "/index/about" },
      { name: "สังคมผู้สูงอายุ", href: "/index/society" },
      { name: "เบี้ยยังชีพ", href: "/index/allowance" },
      { name: "ติดต่อ", href: "/index/contact" },
      { name: "เข้าสู่หน้าหลัก", href: "/main" }
    ]
  )

  const [homeMin, setHomeMin] = useState(
    [
      { name: "เกี่ยวกับเรา", href: "/index/about" },
      { name: "สังคมผู้สูงอายุ", href: "/index/society" },
      { name: "เบี้ยยังชีพ", href: "/index/allowance" },
      { name: "ติดต่อ", href: "/index/contact" },
      { name: "เข้าสู่หน้าหลัก", href: "/main" },
    ]
  )

  const onConfirm = (order) => {
    setStatus(order)
  }

  return (
    <React.Fragment>
      {
        typeof document === 'undefined' ?
          null :
          <React.Fragment>
            <Head>
              <title>Eldery DB</title>
              <link rel='icon' href='/static/logomain.svg' />
            </Head>
            <NavBar name="index" tab={isSmallScreen ? homeMin : home} confirm={onConfirm} />
            <div className="warp-index">
                <Cover />
                <About />
                <Agency />
                <Info />
                <Footer />
            </div>
          </React.Fragment>

      }
    </React.Fragment>

  )
}
export default Home;