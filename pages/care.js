import React from 'react'
import Nav from '../components/nav'


class Care extends React.Component{
    render(){
        return(
            <div className="warp-service">
                <Nav name="Care"/>
                  <div className="content-service">
                      <h1>บริการดูแลผู้สูงอายุ</h1>
                  </div>
                  
            </div>
        )
    }
}
export default Care;