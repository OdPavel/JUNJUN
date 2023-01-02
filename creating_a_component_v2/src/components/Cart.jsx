import React, {Component} from 'react';

class Cart extends Component {
    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}



export default Cart;