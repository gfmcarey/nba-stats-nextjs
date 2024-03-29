import React from "react"
import styled from "@emotion/styled"
import { useSelector, useDispatch } from 'react-redux'

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: .3rem;
`;

const PlayerFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    return (
        <Input
            type="text"
            value={filter}
            onChange={(evt) => dispatch({
                type: "SET_FILTER",
                payload: evt.target.value,
            })}
        />
    );
};

export default PlayerFilter