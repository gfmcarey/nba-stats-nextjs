import React from 'react';
import PlayerType from "../src/PlayerType";
import { useSelector } from 'react-redux'
import styled from "@emotion/styled"

const Header = styled.td`
    font-weight: bold;
`;

const Name = styled.h1`
    margin: auto;
`

const PlayerInfo = () => {
    const selectedPlayer = useSelector((state) => state.selectedPlayer);  

    return selectedPlayer ? (
        <div>
            <Name>{selectedPlayer.name}</Name>
            <table>
                {
                    Object.keys(selectedPlayer).map((key) => (
                        <tr key={key}>
                            <Header>{key.charAt(0).toUpperCase() + key.slice(1)}:</Header>
                            <td>{selectedPlayer[key]}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    ) : null;
};

PlayerInfo.propTypes = PlayerType;

export default PlayerInfo;