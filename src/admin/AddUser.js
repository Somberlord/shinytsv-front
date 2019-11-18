import React from 'react';
import Modal from '../utils/Modal'

function Tsvdetails(props) {
    return <Modal isactive={props.active} title="Ajouter un joueur" onclose={props.onclose}>
        <div className="container">
            <p>Coucou</p>
        </div>
    </Modal>
}

export default Tsvdetails;