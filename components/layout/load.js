import React from 'react'

class Load extends React.Component {

    static defaultProps = {
        name: [],
    }


    render() {
        const { name } = this.props
        console.log(name);

        return (
            <div>
                {
                    name == 'index' ?

                        <div className="warp-load">
                            <div className="load">
                                <img src="/static/load4.gif" alt={name}/>
                            </div>
                        </div>

                        :
                        null
                }

            </div>
        )
    }
}
export default Load;