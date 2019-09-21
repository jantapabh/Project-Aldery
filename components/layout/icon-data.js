import React from 'react'
import Circle from 'react-circle';

const textColor = "#000000";
const font = 'Prompt, sans-serif';
const bgColor = "#d9d9d9"

class IconData extends React.Component {

    static defaultProps = {
        icon: [],
        data: [],
 
    }

    render() {
        return (
            <div className="icon-data" >
                {
                    this.props.icon.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <div className="icon-content ">


                                    {
                                        this.props.data.map((items, indexs) => {

                                            return (
                                                index == 0 && indexs == 0 ?
                                                    <Circle
                                                        animate={true} // Boolean: Animated/Static progress
                                                        animationDuration="1s" // String: Length of animation
                                                        size="100" // String: Defines the size of the circle.
                                                        lineWidth="25" // String: Defines the thickness of the circle's stroke.
                                                        progress={items} // String: Update to change the progress and percentage.
                                                        progressColor={item.color} // String: Color of "progress" portion of circle.
                                                        bgColor={bgColor} // String: Color of "empty" portion of circle.
                                                        textColor={textColor} // String: Color of percentage text color.
                                                        textStyle={{
                                                            font: { font },
                                                            fontSize: "5rem" // CSSProperties: Custom styling for percentage.
                                                        }}
                                                        percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
                                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                        showPercentage={true} // Boolean: Show/hide percentage.
                                                        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                                    />
                                                    :
                                                    index == 1 && indexs == 1 ?
                                                        <Circle
                                                            animate={true}
                                                            animationDuration="1s"
                                                            size="100"
                                                            lineWidth="25"
                                                            progress={items}
                                                            progressColor={item.color}
                                                            bgColor={bgColor}
                                                            textColor={textColor}
                                                            textStyle={{
                                                                font: { font },
                                                                fontSize: "5rem"
                                                            }}
                                                            percentSpacing={0}
                                                            roundedStroke={true}
                                                            showPercentage={true}
                                                            showPercentageSymbol={true}
                                                        />
                                                        :
                                                        index == 2 && indexs == 2 ?
                                                            <Circle
                                                                animate={true}
                                                                animationDuration="1s"
                                                                size="100"
                                                                lineWidth="25"
                                                                progress={items}
                                                                progressColor={item.color}
                                                                bgColor={bgColor}
                                                                textColor={textColor}
                                                                textStyle={{
                                                                    font: { font },
                                                                    fontSize: "5rem"
                                                                }}
                                                                percentSpacing={0}
                                                                roundedStroke={true}
                                                                showPercentage={true}
                                                                showPercentageSymbol={true}
                                                            />
                                                            :
                                                            index == 3 && indexs == 3 ?
                                                                <Circle
                                                                    animate={true}
                                                                    animationDuration="1s"
                                                                    size="100"
                                                                    lineWidth="25"
                                                                    progress={items}
                                                                    progressColor={item.color}
                                                                    bgColor={bgColor}
                                                                    textColor={textColor}
                                                                    textStyle={{
                                                                        font: { font },
                                                                        fontSize: "5rem"
                                                                    }}
                                                                    percentSpacing={0}
                                                                    roundedStroke={true}
                                                                    showPercentage={true}
                                                                    showPercentageSymbol={true}
                                                                />
                                                                :
                                                                null
                                            )
                                        })
                                    }
                                    <p className="animated fadeInDown delay-2s" >{item.label}</p>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    }
}
export default IconData;