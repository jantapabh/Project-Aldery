import React from 'react'
import Link from 'next/link';
import Dashboard from './layout/dashboard';

const Empty = () => {
    return (
        <React.Fragment>
            {
                typeof document === 'undefined' ?
                    null :
                    <Dashboard>
                        <div className="warp-empty">
                            <div className="content-empty">
                                <img src="/static/empty.jpg" alt="empty" />
                                <div className="title-empty">
                                    <h4>หน้ายังไม่พร้อมใช้งาน โปรดกลับสู่หน้าหลัก</h4>
                                </div>
                            </div>
                            <Link href="/">
                                <h5>หน้าหลัก</h5>
                            </Link>
                        </div>
                    </Dashboard>
            }
        </React.Fragment>
    )
}
export default Empty;