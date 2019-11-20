import React from 'react';
import useForm from 'react-hook-form';
import Modal from '../utils/Modal'

function AdduserModal(props) {

    const { register, handleSubmit } = useForm();

    let user = (props.user !== null && props.user !== undefined ? props.user : {id: null, name: "", site: "", friendcode: "", note: ""});

    let useridform = <></>
    let whipandwarnings = <></>
    console.log("addusermodal");
    console.log(user);
    if(user.id !== null) {
        useridform = (
            <div className="field">
                <label className="label">Id</label>
                <div className="control">
                    <input name="id" readOnly className="input" type="text" placeholder="Pseudo" value={user.id} ref={register}/>
                </div>
            </div>
        )
        whipandwarnings = (
            <>
            <div className="field">
                <label className="label">Coups de fouet</label>
                <div className="control">
                    <input name="nbwhip" className="input" type="number" placeholder="Coups de fouet" defaultValue={user.nbwhip} ref={register}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Avertissements</label>
                <div className="control">
                    <input name="nbwarning" className="input" type="number" placeholder="Avertissements" defaultValue={user.nbwarning} ref={register}/>
                </div>    
            </div>
            </>
        )
    }

    return ( 
    <Modal isactive={props.active} title="Ajouter un joueur" onclose={props.onclose}>
        <div className="container">
            <form onSubmit={handleSubmit(props.onsubmit)}>
                {useridform}
                <div className="field">
                    <label className="label">Pseudo</label>
                    <div className="control has-icons-left">
                        <input name="name" className="input" type="text" placeholder="Pseudo" defaultValue={user.name} ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Site</label>
                    <div className="control has-icons-left">
                        <input name="site" className="input" type="text" placeholder="Site" defaultValue={user.site} ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-newspaper"></i>
                        </span>
                    </div>
                </div>
                {whipandwarnings}
                <div className="field">
                    <label className="label">Code Ami</label>
                    <div className="control has-icons-left">
                        <input name="friendcode" className="input" type="text" placeholder="XXXX-XXXX-XXXX" defaultValue={user.friendcode} ref={register}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-smile"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Commentaires</label>
                    <div className="control has-icons-left">
                        <input name="note" className="input" type="text" placeholder="Commentaires" defaultValue={user.note} ref={register}/>
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