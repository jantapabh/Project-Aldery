import React from 'react'
import Link from 'next/link'

class Cover extends React.Component {

    render() {


        return (
            <div className="warp-header">
                <img src="/static/bg-test4.jpg" alt="cover" />

                <div className="page-content">
                    <div className="container-fluid">
                        <h1 className="animated fadeInDown delay-s">Eldery DB</h1>
                        <h2 className="animated fadeInDown delay-s">ฐานข้อมูลผู้สูงอายุ และอินโฟกราฟิก</h2>
                        <Link href="/main">
                            <button type="button" class="btn btn-primary animated fadeInDown delay-s">เข้าสู่หน้าหลัก</button>
                        </Link>

                    </div>
                </div>

            </div>
        )
    }
}
export default Cover
