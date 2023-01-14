import React from 'react';

function Header({onClick}) {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <hr/>
            <button onClick={onClick} type="button" className="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"/>
        </div>
    );
}

export default Header;