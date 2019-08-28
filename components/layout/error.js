import React from 'react'

class Error extends React.Component{

    static defaultProps = {
        error:""
    }

    render(){
        if(this.props.error == "404"){
            return(
                <div>
                    
                </div>
            )
        }
       
        return(
            <div>
                

            </div>
        )
    }
}
export default Error;