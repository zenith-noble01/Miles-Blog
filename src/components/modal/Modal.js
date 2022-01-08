import React from 'react'
import "./modal.css"

const Modal = ({modal, setModal}) => {
    return (
        <div className="modal">
            <div className="modal__btn">
                <p>By clicking on this button your going to be loged out</p>
                <button className="LogOut__btn">log Out</button>
                <button onClick={()=> setModal(!modal)} className="clicker">*</button>
            </div>
        </div>
    )
}

export default Modal
