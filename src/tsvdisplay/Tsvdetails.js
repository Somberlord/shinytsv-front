import React from 'react';

function TsvdetailsActive(props) {

    const tsv = props.tsv;
    const onclose = props.onclose;

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{tsv.name}</p>
                    <button className="delete" aria-label="close" onClick={onclose}></button>
                </header>
                <section className="modal-card-body">
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
                </section>
            </div>
            <button className="modal-close is-large" aria-label="close"  onClick={onclose}></button>
        </div>
            
    );
}

function TsvdetailsInactive(props) {
    return (
        <div className="modal"></div>
    );
}

function Tsvdetails(props) {
    if(props.tsvid == null || props.tsvdata == null) {
        return <TsvdetailsInactive />
    } else {
        const tsvdata = props.tsvdata;
        const tsv = tsvdata.find((element) => {
            return element.uid === props.tsvid;
        });
        return <TsvdetailsActive tsv={tsv} onclose={props.onclose} />
    }
}

export default Tsvdetails;