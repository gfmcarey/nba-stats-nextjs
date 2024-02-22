// this makes the page client side check out 
//https://stackoverflow.com/questions/76181096/typeerror-createcontext-only-works-in-client-components-add-the-use-client-d 
//if you want to switch to server side
"use client";
import React from "react"
import styled from "@emotion/styled"
import { CssBaseline } from "@mui/material";
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux'

import PlayerInfo from "../components/PlayerInfo";
import PlayerFilter from "../components/PlayerFilter";
import PlayerTable from "../components/PlayerTable";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 80%;
  padding-top: 1rem;
`;

const playerReducer = (state = {
  player: [],
  filter: "",
  selectedPlayer: null,
}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.payload,
      };
    case 'SET_SELECTED_PLAYER':
      return {
        ...state,
        selectedPlayer: action.payload,
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: playerReducer
})


function Home() {
  const dispatch = useDispatch();
  const player = useSelector(state => state.player);

  React.useEffect(() => {
    fetch("http://localhost:3000/players.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: 'SET_PLAYER',
          payload: data,
        })
      );
  }, [])

  if (!player) {
    return <div>Loading data</div>
  };

  return (
    <Container>
      <CssBaseline />
      <Title> Player Search</Title>
      <TwoColumnLayout>
        <div>
          <PlayerFilter />
          <PlayerTable />
        </div>
        <PlayerInfo />
      </TwoColumnLayout>
    </Container>
  );
};


export default () => <Provider store={store}><Home /></Provider>
