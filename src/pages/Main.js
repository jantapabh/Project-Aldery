import React from 'react'
import Sheetapi from '../config/api'

class Main extends React.Component{

    async componentDidMount(){
        localStorage.setItem("myOauth",JSON.stringify(await Sheetapi.postSheetValues()) ) 
    }

    handleOauth = () => {
        setTimeout(  function() {
            window.location.href = "/Sheet";
         },2000);
    }

    render(){
        return(
            <div>
                
                <button onClick={this.handleOauth} />
            </div>
        )
    }
}
export default Main