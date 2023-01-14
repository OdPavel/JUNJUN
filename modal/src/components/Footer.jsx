import React from 'react';

const Footer = ({onClick}) => {
    return (
        <div className="modal-footer">
            <button onClick={onClick} type="button" className="btn btn-secondary"
                    data-bs-dismiss="modal">Close
            </button>
        </div>
    );
};

export default Footer;