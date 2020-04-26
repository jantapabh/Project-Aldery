import React from 'react'
import Dashboard from '../components/layout/dashboard';

const MainPage = () => {

    return (
        <React.Fragment>
            {
                typeof document === 'undefined' ?
                    null :
                    <Dashboard>
                    </Dashboard>
            }
        </React.Fragment>
    )
}
export default MainPage;