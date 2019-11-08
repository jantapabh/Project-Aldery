import React from 'react'
import Nav_index from '../../components/nav_index'
import { Button } from 'rsuite';
import 'rsuite/lib/styles/index.less';

class Services extends React.Component {

    render() {
        return (
            <div>
                <Nav_index />
                <Button appearance="primary" href="https://rsuitejs.com/">
                    Getting started
                </Button>
            </div>
        )
    }
}
export default Services;
