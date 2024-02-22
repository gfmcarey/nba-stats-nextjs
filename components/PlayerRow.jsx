import React from 'react';
import Button from '@mui/material/Button'
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import Link from "next/link";

import PlayerType from "../src/PlayerType";

const Row = styled.td`
    text-align: center;
`

const PlayerRow = ({ player, onClick }) => (
  
  <tr key={player.id}>
    <Row>
      <Link href={`/player/${player.id}`}>
        {player.name}
      </Link>
    </Row>
    <Row>{player.team}</Row>
    <Row>
      <Button
        variant="contained"
        color="primary" 
        onClick={() => onClick(player)}
      >More Info</Button>
    </Row>
  </tr>
);

PlayerRow.propTypes = {
  Player: PropTypes.arrayOf(PlayerType),
};

export default PlayerRow;