import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class ListGroup extends Component {
    render() {
        const data = this.props.children


        return (

                <ul className="list-group">
                    {data.map((item)=><li key={uuidv4()} className="list-group-item">{item}</li>)}

                </ul>

        )
    }
}

ListGroup.propTypes = {
    data: PropTypes.array
};

export default ListGroup;