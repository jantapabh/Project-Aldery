import React from 'react'


class Menu_icon extends React.Component {

    static defaultProps ={
        icon:[]
    }
    render() {
        return (
            
                <div className="warp-menu" >
                    <div className="menu">
                        <div className="warp-icon">
                            {
                                this.props.icon.map((item, index) => {
                                    return (

                                        <a href={item.href}>
                                            <div className="icon animated bounceInUp delay-1s" key={index}>
                                                <div className="icon-img">
                                                    <img key={index} src={item.pic} alt={item.name} />
                                                    <img className="hover" src={item.pichover} alt={item.name} />
                                                </div>

                                                <h6>{item.text}</h6>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
           
        )
    }
}
export default Menu_icon;