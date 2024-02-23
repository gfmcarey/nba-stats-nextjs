import styled from "@emotion/styled"

const Header = styled.td`
    font-weight: bold;
`;

const Info = styled.td`
    font-weight: normal;
    padding-left: 20px;
`

const PlayerKey = ({ player }) => (

    <div>
        {
            Object.keys(player).map((key) => (
                <tr key={key}>
                    <Header>{key.charAt(0).toUpperCase() + key.slice(1)}</Header>
                    <Info>{player[key]}</Info>
                </tr>

            ))}
    </div>

);

export default PlayerKey;