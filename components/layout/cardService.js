import React from 'react'
import Link from 'next/link'

class CardService extends React.Component {

    static defaultProps = {
        list: []
    }


    render() {
        console.log(this.props.list);
        
        return (
            <div className="card-service">
                {
                    this.props.list.map((item, index) => {
                        return (
                            <React.Fragment>
                                <h5>{item.ชื่อ}</h5>
                                <h6>{item.ที่อยู่}</h6>
                                <p>{item.เบอร์ติดต่อ}</p>
                            </React.Fragment>
                        )
                    })
                }

            </div>

        )
    }
}
export default CardService;