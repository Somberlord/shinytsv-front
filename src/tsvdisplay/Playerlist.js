import React from 'react';

function Playerlist(props) {

    const players = props.playerlist.map((player) => {
        return (
            <option>{player}</option>
        )
    });

    return (
        <div className="field is-horizontal">
                <div className="field-label is-normal">
                    Sélection du joueur
                </div>
                <div className="field-body">
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select onChange={props.onChange}>
                                <option></option>
                                {players}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}

export default Playerlist;