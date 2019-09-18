import React from 'react'


class CardDepartment extends React.Component {

    static defaultProps = {
        card: [],
    }
    
    render() {
        return (
            <div className="warp-department">
                <h1 className="icon animated fadeInDown delay-1s">หน่วยงานที่เกี่ยวข้อง</h1>
                <div className="card-department">
                    <div className="card-img icon animated fadeInDown delay-1s">
                        {
                            this.props.card.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} target="_blank"  title={item.name}>
                                        <img className={`img-${index}`} src={item.pic} alt={item.name} />
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
export default CardDepartment;