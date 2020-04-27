import React from 'react'
import Link from 'next/link';

const Empty = () => {

    return (
        <div className="warp-empty">
            <div className="content-empty">
                <img src="/static/empty.jpg" alt="empty" />
                <div className="title-empty">
                    <h4>ความผิดพลาด 401 ข้อมูลไม่พร้อมใช้งาน</h4>
                    <h4>โปรดกลับสู่หน้าแรก</h4>
                </div>
            </div>
            <Link href="/">
                <h5>หน้าแรก</h5>
            </Link>
        </div>
    )
}
export default Empty;