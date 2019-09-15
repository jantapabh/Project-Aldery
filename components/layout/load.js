import React from 'react'

class Load extends React.Component {

    componentDidMount() {
        setTimeout(
            function () {
                window.location.href="/"
            }
                .bind(this),
            3000
        );
    }

    render() {
        return (
            <div>
                Loaddddddddddddddddd

            </div>
        )
    }
}
export default Load;