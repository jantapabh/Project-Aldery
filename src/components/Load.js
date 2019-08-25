import React from 'react'
import load from  '../assets/img/load.gif'

class Load extends React.Component{

    componentDidMount(){
        setTimeout(() => {
            window.location.href = "/Sheet"
          }, 4000);
    }
    render(){
        return(
            <div>
                <img src={load} alt="load" />
            </div>
        )
    }
}
export default Load