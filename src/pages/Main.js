import React from 'react'
import Sheetapi from '../config/api'

class Main extends React.Component{
   async componentDidMount(){
    const list = await Sheetapi()

    console.log("List",list);
    
    }
    render(){
        return(
            <div>
                {/* <Sheet/> */}
            </div>
        )
    }
}
export default Main