import React from 'react';

function UsersList(props) {

    const usersdata = props.usersList.map((user) => {
        let selectedClass="";
        /*if(user.uid === props.activeuser) {
            selectedClass = "is-selected";
        }*/
        return (
            <tr key={user.id} className={selectedClass}>
                <td>{user.name}</td>
                <td>{user.site}</td>
                <td>{user.nblate}</td>
                <td>{user.nbwhip}</td>
                <td>{user.nbwarning}</td>
                <td>{user.status}</td>
                <td>{user.friendcode}</td>
                <td>{user.note}</td>
            </tr>
        )
    });

    const headers = (
        <tr>
            <th>Pseudo</th>
            <th>Site d'inscription</th>
            <th>Nb oeufs en retard</th>
            <th>Nb Fouet</th>
            <th>Nb Warning</th>
            <th>Statut</th>
            <th width="190px">Code ami</th>
            <th>Commentaire</th>
        </tr>
    );

    return (
        <table className="table is-hoverable">
            <thead>
                {headers}
            </thead>
            <tbody>
                {usersdata}
            </tbody>
            <tfoot>
                {headers}
            </tfoot>
        </table>
    );
}

export default UsersList;