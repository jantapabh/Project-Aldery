import React from 'react'
import Circle from 'react-circle';

import Sheetapi from '../../config/api'

const textColor = "#000000";
const font = 'Prompt, sans-serif';
const bgColor = "#d9d9d9"

class IconData extends React.Component {

    static defaultProps = {
        icon: [],
    
    }

    constructor(props){
        super(props);
        this.state={
            icon: [
                { label: "อายุ60ถึง69ปี", color: "#f44336", bgColor:"#fad0c3" },
                { label: "อายุ70ถึง79ปี", color: "#ffc107", bgColor:"#fef3bd" },
                { label: "อายุ80ถึง89ปี", color: "#00d084", bgColor:"#c1e1c5" },
                { label: "อายุ >= 90ปี", color: "#0693e3", bgColor:"#c4def6" }
            ],
            data: []
        }
    }

    async componentDidMount() {
        await localStorage.setItem("myOauth", JSON.stringify(await Sheetapi.postSheetValues()))
        let userOauth = await JSON.parse(localStorage.getItem("myOauth"))

        this.access_token = userOauth.data.access_token
        await this.list('sheets!D2:L2')


    }

    list = async (value) => {

        try {

            this.list = await Sheetapi.getSheet2(this.access_token, value)

            for (let i = 0; i < this.list.length; i++) {
                let value = await {
                    name: this.list[i][0],
                    อายุ60ถึง69ปี: parseInt(this.list[i][1].replace(",", "")),
                    อายุ60ถึง69ปีร้อยละ: parseFloat(this.list[i][2].replace(",", "")),
                    อายุ70ถึง79ปี: parseInt(this.list[i][3].replace(",", "")),
                    อายุ70ถึง79ปีร้อยละ: parseFloat(this.list[i][4].replace(",", "")),
                    อายุ80ถึง89ปี: parseInt(this.list[i][5].replace(",", "")),
                    อายุ80ถึง89ปีร้อยละ: parseFloat(this.list[i][6].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปี: parseInt(this.list[i][7].replace(",", "")),
                    อายุมากกว่าหรือเท่ากับ90ปีร้อยละ: parseFloat(this.list[i][8].replace(",", "")),
                }
                this.setState(prevState => ({
                    data: [...prevState.data, value.อายุ60ถึง69ปีร้อยละ, value.อายุ70ถึง79ปีร้อยละ, value.อายุ80ถึง89ปีร้อยละ, value.อายุมากกว่าหรือเท่ากับ90ปีร้อยละ],
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        return (
            <div className="icon-data" >
                {
                    this.state.icon.map((item, index) => {
                        return (
                            <React.Fragment key={index} >
                                <div className="icon-content animated fadeInDown delay-1s ">


                                    {
                                        this.state.data.map((items, indexs) => {

                                            return (
                                                index == 0 && indexs == 0 ?
                                                    <Circle
                                                        animate={true} // Boolean: Animated/Static progress
                                                        animationDuration="1s" // String: Length of animation
                                                        responsive={false} // Boolean: Make SVG adapt to parent size
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
                                                            responsive={false}
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
                                                                responsive={false}
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
                                                                    responsive={false}
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


                                    <p>{item.label}</p>

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