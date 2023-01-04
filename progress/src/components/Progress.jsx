import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Progress extends Component {
    render() {
        const {percentage} = this.props

        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                     aria-valuemax="100" aria-label="progressbar"
                     style={{width: percentage + '%', height: '8px', backgroundColor: 'red', margin: '0 auto'}}>
                </div>
            </div>

        );
    }
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
};

export default Progress;