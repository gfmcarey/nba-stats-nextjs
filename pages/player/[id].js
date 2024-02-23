import { CssBaseline } from "@mui/material";
import styled from "@emotion/styled";
import { useRouter } from 'next/router';
import PlayerKey from '../../components/PlayerKey';
import SelectDropDown from "../../components/SelectDropDown";


const Container = styled.div`
  margin: auto;
  width: 90%;
  padding-top: 1rem;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-column-gap: 1rem;
`;

export default function Player() {
  const router = useRouter()
  const {
    query: player,
  } = router
  return (
    <div style={{ backgroundColor: "#3636a3"}}>
      <Container>
        <CssBaseline />
          <Title>
            {player.name}
          </Title>
          <TwoColumnLayout>
            <PlayerKey player={player}/>
            <SelectDropDown/>
          </TwoColumnLayout>

      </Container>
    </div>


  )
};