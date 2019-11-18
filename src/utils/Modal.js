import React from 'react';

function ModalActive(props) {

    const onclose = props.onclose;

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close" onClick={onclose}></button>
                </header>
                <section className="modal-card-body">
                    {props.children}                    
                </section>
            </div>
            <button className="modal-close is-large" aria-label="close"  onClick={onclose}></button>
        </div>
            
    );
}

function ModalInactive(props) {
    return (
        <div className="modal"></div>
    );
}

function Modal(props) {
    console.log(props)
    if(props.isactive===false) {
        return <ModalInactive />
    } else {
        return <ModalActive title={props.title} onclose={props.onclose}>
            {props.children}
        </ModalActive>
    }
}

export default Modal;