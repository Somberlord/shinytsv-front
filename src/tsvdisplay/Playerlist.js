import React from 'react';

function Playerlist(props) {

    const players = props.playerlist.map((player) => {
        return (
            <option>{player}</option>
        )
    });

    return (
        <div class="field is-horizontal">
                <div class="field-label is-normal">
                    Sélection du joueur
                </div>
                <div class="field-body">
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select>
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