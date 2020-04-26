import React from 'react'
import Dashboard from '../components/layout/dashboard';

const MainPage = () => {

    return (
        <React.Fragment>
            {
                typeof document === 'undefined' ?
                    null :
                    <Dashboard>
                        Main
                    </Dashboard>
            }
        </React.Fragment>
    )
}
export default MainPage;