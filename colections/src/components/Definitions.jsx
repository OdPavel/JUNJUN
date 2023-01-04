import React, {Component} from 'react';
import PropTypes from "prop-types";


class Definitions extends Component {


    render() {
        const {data} = this.props

        return (

            <>
                {data.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <dt>{item.dt}</dt>
                            <dd>{item.dd}</dd>
                        </React.Fragment>


                    )

                })}
            </>


        )
    }
}

Definitions.propTypes = {
    data: PropTypes.array.isRequired
}

export default Definitions;