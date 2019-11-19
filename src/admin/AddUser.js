import React from 'react';
import useForm from 'react-hook-form';
import Modal from '../utils/Modal'

function AdduserModal(props) {

    const { register, handleSubmit } = useForm();

    return ( 
    <Modal isactive={props.active} title="Ajouter un joueur" onclose={props.onclose}>
        <div className="container">
            <form onSubmit={handleSubmit(props.onsubmit)}>
                <div className="field">
                    <label className="label">Pseudo</label>
                    <div className="control has-icons-left">
                        <input name="name" className="input" type="text" placeholder="Pseudo" ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Site</label>
                    <div className="control has-icons-left">
                        <input name="site" className="input" type="text" placeholder="Site" ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-newspaper"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Code Ami</label>
                    <div className="control has-icons-left">
                        <input name="friendcode" className="input" type="text" placeholder="XXXX-XXXX-XXXX" ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-smile"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Commentaires</label>
                    <div className="control has-icons-left">
                        <input name="note" className="input" type="text" placeholder="Commentaires" ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-clipboard"></i>
                        </span>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control ">
                        <button className="button is-link">Enregistrer</button>
                    </div>
                    <div className="control ">
                        <button className="button is-link is-light" onClick={props.onclose}>Annuler</button>
                    </div>
                </div>
            </form>
        </div>
    </Modal>
    );
}

export default AdduserModal;