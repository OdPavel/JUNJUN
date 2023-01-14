import React from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import styles from './Modal.module.css'

function Modal({onClick, isShow}) {
    return (
        <div className={isShow ? styles.root: ''}>
            <div className={styles.modal}>

                <div className={isShow ? "modal fade show" : "modal"} style={isShow ? {display: 'block'}: {display: "none"}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className={styles.modalDialog}>
                        <div className="modal-content">
                          <Header onClick={onClick}/>
                           <Body/>
                           <Footer onClick={onClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Modal;
