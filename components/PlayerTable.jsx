import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import PlayerRow from "./PlayerRow";

const PlayerTable = () => {
    const dispatch = useDispatch();
    const player = useSelector((state) => state.player);  
    const filter = useSelector((state) => state.filter);

    return (
        <table width="100%">
            <tbody>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                </tr>
                {player
                    .filter(({ name }) =>
                        name
                            .toLocaleLowerCase()
                            .includes(filter.toLocaleLowerCase())
                    )
                    .slice(0, 20)
                    .map(player => (
                        <PlayerRow
                            key={player.id}
                            player={player}
                            onClick={(player) => dispatch({
                                type: 'SET_SELECTED_PLAYER',
                                payload: player,
                            })}
                        />
                    ))
                }
            </tbody>
        </table>
    );
};


export default PlayerTable;