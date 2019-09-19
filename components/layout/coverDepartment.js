import React from 'react'


class CardDepartment extends React.Component {

    static defaultProps = {
        card: [],
    }
    
    render() {
        return (
            <div className="warp-department">
                <div className="card-department">
                    <div className="card-img icon">
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