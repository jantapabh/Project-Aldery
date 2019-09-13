import React from 'react'

class IconData extends React.Component {

    static defaultProps = {
        icon: [],
        data: []
    }


    render() {


        return (
            <div className="icon-data" >
                {
                    this.props.icon.map((item, index) => {
                        return (
                            <div className="icon-data">
                                <div className="icon-content">
                                    <svg
                                        className="progress-ring"
                                        height="120"
                                        width="120"
                                    >
                                        <circle
                                            className="progress-ring__circle"
                                            stroke={item.color}
                                            stroke-width="6"
                                            fill="transparent"
                                            r="50"
                                            cx="60"
                                            cy="60"
                                        />

                                        {
                                            this.props.data.map((items, indexs) => {

                                                return (
                                                    index == 0 && indexs == 0 ?
                                                        <text key={index}
                                                            x="60"
                                                            y="70"
                                                            text-anchor="middle"
                                                            stroke-width="1px"
                                                        >
                                                            {items}
                                                        </text>
                                                        :
                                                        index == 1 && indexs == 1 ?
                                                            <text key={index}
                                                                x="60"
                                                                y="70"
                                                                text-anchor="middle"
                                                                stroke-width="1px"
                                                            >
                                                                {items}
                                                            </text>
                                                            :
                                                            index == 2 && indexs == 2 ?
                                                                <text key={index}
                                                                    x="60"
                                                                    y="70"
                                                                    text-anchor="middle"
                                                                    stroke-width="1px"
                                                                >
                                                                    {items}
                                                                </text>
                                                                :
                                                                index == 3 && indexs == 3 ?
                                                                    <text key={index}
                                                                        x="60"
                                                                        y="70"
                                                                        text-anchor="middle"
                                                                        stroke-width="1px"
                                                                    >
                                                                        {items}
                                                                    </text>
                                                                    :
                                                                    null
                                                )
                                            })

                                        }


                                        })


                                    </svg>
                                    <p>{item.label}</p>

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}
export default IconData;