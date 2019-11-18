import React from 'react';
import Modal from '../utils/Modal'

function Tsvdetails(props) {
    if(props.tsvid == null || props.tsvdata == null) {
        return <Modal isactive={false}/>
    } else {
        const tsvdata = props.tsvdata;
        const tsv = tsvdata.find((element) => {
            return element.uid === props.tsvid;
        });
        return <Modal isactive={true} title={tsv.name} onclose={props.onclose}>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column">
                        <p>Save {tsv.save}</p>
                        <p>Boite {tsv.box}</p>
                    </div>
                    <div className="column">
                        <p>Ligne {tsv.row}</p>
                        <p>Colonne {tsv.column}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column has-text-centered">
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-angle-right"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                    </div>
                    <div className="column">
                        <div className="block"><span className="icon"><i className="fas fa-angle-down"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-angle-down"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-angle-down"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-check-circle"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                    </div>
                    <div className="column">
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                    </div>
                    <div className="column">
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                    </div>
                    <div className="column">
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                    </div>
                    <div className="column">
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                        <div className="block"><span className="icon"><i className="fas fa-ban"></i></span></div>
                    </div>
                </div>
            </div>
        </Modal>
    }
}

export default Tsvdetails;