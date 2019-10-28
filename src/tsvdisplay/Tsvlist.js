import React from 'react';

function Tsvlist(props) {

    const tsvdata = props.tsvdata.map((tsv) => {
        return (
            <tr>
                <td>{tsv.name}</td>
                <td>{tsv.gender}</td>
                <td>{tsv.nature}</td>
                <td>{tsv.ability}</td>
                <td>{tsv.ball}</td>
                <td>{tsv.lp}</td>
                <td>{tsv.atk}</td>
                <td>{tsv.def}</td>
                <td>{tsv.spatk}</td>
                <td>{tsv.spdef}</td>
                <td>{tsv.spe}</td>
                <td>{tsv.hp}</td>
                <td>{tsv.atk1}</td>
                <td>{tsv.atk2}</td>
                <td>{tsv.atk3}</td>
                <td>{tsv.atk4}</td>
            </tr>
        )
    });

    const headers = (
        <tr>
            <th>Nom</th>
            <th>Genre</th>
            <th>Nature</th>
            <th>Talent</th>
            <th>Ball</th>
            <th>PV</th>
            <th>Atk</th>
            <th>Def</th>
            <th>AtkSpé</th>
            <th>DefSpé</th>
            <th>Vit</th>
            <th>PC</th>
            <th>Attaque 1</th>
            <th>Attaque 2</th>
            <th>Attaque 3</th>
            <th>Attaque 4</th>
        </tr>
    );

    return (
        <table className="table is-hoverable">
            <thead>
                {headers}
            </thead>
            <tbody>
                {tsvdata}
            </tbody>
            <tfoot>
                {headers}
            </tfoot>
        </table>
    );
}

export default Tsvlist;