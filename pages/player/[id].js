import { CssBaseline } from "@mui/material";
import styled from "@emotion/styled"
import { withRouter } from 'next/router'


const Container = styled.div`
  margin: auto,
  width: 800px,
  padding-top: 1rem,
`;

export default withRouter(({ router }) => (
    <Container>
        <CssBaseline />
            hello there {router.query.id}
    </Container>
));